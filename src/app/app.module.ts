import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ng6-toastr-notifications';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppointmentCreateComponent } from './shared/appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './shared/appointment-update/appointment-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'appointment/create', component: AppointmentCreateComponent },
      { path: 'appointment/update', component: AppointmentUpdateComponent }, 
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '*', component: HomeComponent},
      { path: '**', component: HomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
