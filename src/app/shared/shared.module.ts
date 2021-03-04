import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent
  ]
})
export class SharedModule { }
