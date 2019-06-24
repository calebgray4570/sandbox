import { Injectable } from '@angular/core';

import { ApiService } from './api.service'
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }
  
  getCalendarEvents() {
    return this.apiService.get('/calendar_event/')
  }

  // getAuth() {
  //   return this.http.get("https://cors-anywhere.herokuapp.com/https://apis.google.com/js/api.js")
  // }

}