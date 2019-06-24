import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', loadChildren: () => import('./features/calendar/calendar.module').then( m => m.CalendarModule ) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
      onSameUrlNavigation: 'reload',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
