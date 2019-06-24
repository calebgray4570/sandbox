import { CommonModule, DatePipe } from '@angular/common';
import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {
  AuthService,
  UsersService,
  StartUpService,
  AuthInterceptor,
  throwIfAlreadyLoaded,
} from '../core';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [
    AuthInterceptor,
    StartUpService,
    { provide: APP_INITIALIZER, useFactory: startUpServiceFactory, deps: [StartUpService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    UsersService,
    DatePipe,
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export function startUpServiceFactory(startUpService: StartUpService): Function {
  return () => startUpService.load()}