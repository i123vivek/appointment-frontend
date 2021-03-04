import { EventEmitter, Inject,Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:3000/api/v1/appointment';

  constructor(public http: HttpClient) { }

  public getAllAppointmentBooked(): any
  {
    let myResponse=this.http.get(`${this.baseUrl}/booked/all`);
    return myResponse;
  }
  public getAppointmentInfoByAppointmentId(appointmentId): any
  {
    let myResponse=this.http.get(`${this.baseUrl}/view/${appointmentId}`);
    return myResponse;
  }

  public bookAppointment(appointmentData): any
  {
    let myResponse=this.http.post(`${this.baseUrl}/book`,appointmentData);
    return myResponse;
  }

  public updateAppointmentBooked(appointmentId,appointmentData): any
  {
    let myResponse=this.http.put(`${this.baseUrl}/${appointmentId}/update`,appointmentData);
    return myResponse;
  }
}
