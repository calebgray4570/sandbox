import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  { path: '', component: CalendarComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    FullCalendarModule,
  ],
  declarations: [
    CalendarComponent,
  ],
  providers: [
    
  ]
})

export class CalendarModule {}