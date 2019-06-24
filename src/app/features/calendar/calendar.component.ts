import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, RouterOutlet } from '@angular/router';
import { first, filter, takeUntil } from 'rxjs/operators';
import { Subscription, Observable, Subject, of } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// import { AuthService, UsersService } from 'src/app/core';
// import { JobCenterService } from '../job-center.service';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import { CalendarService } from 'src/app/core/services/calendar.service';
declare const gapi: any;

@Component( {
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
//   host: {class: 'router-flex'},
  styleUrls: [ './calendar.component.scss' ],
} )

export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('fullcalendar', {static: true}) fullcalendar: FullCalendarComponent;
  public subscription$: Subscription;
  public ngUnsubscribe$: Subject < void > = new Subject < void > ();
  eventsFromServer: any;
  options: any;

  calendarOptions = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    timeZone: 'local',
    selectable: true,
    defaultView: 'dayGridMonth',
    calendarWeekends: true,
    editable: true,
    themeSystem: 'bootstrap',
    plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin, bootstrapPlugin, googleCalendarPlugin],
    googleCalendarApiKey: 'AIzaSyCC98dYDAOzEhqALFwOd8vUYTDXkgzLdYQ',
    eventSources: [
      { 
        events: [
          { title: 'Event Now', start: new Date() },
        ],
      },
      {
        googleCalendarId: ''
      },
    ]
  }
  
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() },
    { googleCalendarId: 'm76fkqsjtb1n9isb9dgtamsvvg@group.calendar.google.com' }
  ];

  public auth2: any;
  CLIENT_ID = '66881366777-2sdm1o1urd2i5bi0ghe5qrhv1qjs0llj.apps.googleusercontent.com';
  API_KEY = 'AIzaSyCC98dYDAOzEhqALFwOd8vUYTDXkgzLdYQ';
  DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  isSignedIn: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calendarService: CalendarService
  ) {}

  ngOnInit() {
    this.options = this.calendarOptions;
    // this.manageRouteData();
    this.getCalendarEvents();

    this.handleClientLoad();
    // this.googleInit();
    // this.initClient()
  }

  ngAfterViewInit() {
    this.googleInit();
    // this.onGoogleLoad()
  }

  public ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  gotoPast() {
    let calendarApi = this.fullcalendar.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.options.eventSources[0].events = this.options.eventSources[0].events.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay,
        editable: true
      })
    }
  }

  handleEventClick(eventObj) {
    window.open(eventObj.event.url, '_blank', 'width=800,height=600')
    eventObj.jsEvent.preventDefault()
  }

  handleSelect(selectObj) {
    console.log('selectObj: ', selectObj);
  }



  getCalendarEvents() {
    this.calendarService.getCalendarEvents()
      .subscribe(
        (res) => {
          this.eventsFromServer = res['results']
        },
        () => {},
        () => {
          this.reworkEventObjects();
        }
      )
      
  }

  reworkEventObjects() {
    for (let i = 0; i < this.eventsFromServer.length; i++) {
      let newObj = {
        title: this.eventsFromServer[i].name,
        start: new Date(this.eventsFromServer[i].dt_start),
        end: new Date(this.eventsFromServer[i].dt_end),
      }
      this.options.eventSources[0].events = this.options.eventSources[0].events.concat(newObj)
    }
  }

  // onGoogleLoad = () => {
  //   gapi.load('client', () => {
  //     this.auth2 = gapi.client.init({
  //       apiKey: this.API_KEY,
  //       clientId: this.CLIENT_ID,
  //       scope: this.SCOPES,
  //     }).then( () => {
  //           gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
  //           this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //         })
  //   })
  //   console.log('gapi: ', gapi);
  // }
  public googleInit() {
    gapi.load('auth2', this.initClient);
    // gapi.load('client',  )
    // gapi.load('client:auth2', () => {
      //   this.auth2 = gapi.auth2.init({
        //     apiKey: this.API_KEY,
        //     clientId: this.CLIENT_ID,
        //     scope: this.SCOPES,
        //     cookiepolicy: 'single_host_origin',
        //   }).then( () => {
          //     gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
          //     this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          //   })
          // })
          // console.log('gapi: ', gapi);
  }

  initClient() {
    this.auth2 = gapi.auth2.init({
      apiKey: this.API_KEY,
      client_id: this.CLIENT_ID,
      scope: this.SCOPES
    }).then( () => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    })
  }

  updateSigninStatus(isSignedIn) {
    console.log('isSignedIn: ', isSignedIn);
    if (isSignedIn) {
      gapi.client.init({
        apiKey: this.API_KEY,
        client_id: this.CLIENT_ID,
        scope: this.SCOPES
      }).then(
        this.listUpcomingEvents()
      )
    } else {
      console.log('isSignedIn: ', isSignedIn);
    }
  }

  handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
    // console.log(gapi.auth2.getAuthInstance().isSignedIn.get())
  }

  public listUpcomingEvents() {
    console.log('user', gapi.client)
    // gapi.client.calendar.events.list({
    //   'calendarId': 'primary',
    //   'timeMin': (new Date()).toISOString(),
    //   'showDeleted': false,
    //   'singleEvents': true,
    //   'orderBy': 'startTime'
    // }).then( (res) => {
    //   console.log('res: ', res);
    // })
  }



  /************************** PRIVATE METHODS **************************/


  handleClientLoad() {
    // gapi.load('client:auth2', initClient);
    // this.calendarService.getAuth()
    //   .subscribe(
    //     res => {
    //       console.log('res: ', res);
          
    //     }
    //   )
  }




























  private manageRouteData() {
     /* Subscribe to route parameters */
    this.route.data
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe(
      (data) => {
      
      }
    )
  }
}