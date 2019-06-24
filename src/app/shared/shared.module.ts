import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginModalComponent, SuccessComponent, ErrorComponent, AdvertisementComponent, SectionModalComponent } from './components';
import { ShowAuthedDirective, ScrollListenerDirective, ScrollClickDirective } from './directives';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    LoginModalComponent,
    ErrorComponent,
    SuccessComponent,
    ShowAuthedDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LoginModalComponent,
    ErrorComponent,
    SuccessComponent,
    ShowAuthedDirective
  ],
  entryComponents: [
    LoginModalComponent,
    ErrorComponent,
    SuccessComponent
  ]
})
export class SharedModule { }