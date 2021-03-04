import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public timeSlotList = [
    {
      "id": "0",
      "startTime": "9:00 A.M.",
      "endTime": "10:00 A.M."
    },
    {
      "id": "1",
      "startTime": "10:00 A.M.",
      "endTime": "11:00 A.M."
    },
    {
      "id": "2",
      "startTime": "11:00 A.M.",
      "endTime": "10:00 A.M."
    },
    {
      "id": "3",
      "startTime": "12:00 P.M.",
      "endTime": "1:00 P.M."
    },
    {
      "id": "4",
      "startTime": "1:00 P.M.",
      "endTime": "2:00 P.M."
    },
    {
      "id": "5",
      "startTime": "2:00 P.M.",
      "endTime": "3:00 P.M."
    },
    {
      "id": "6",
      "startTime": "3:00 P.M.",
      "endTime": "4:00 P.M."
    },
    {
      "id": "7",
      "startTime": "4:00 P.M.",
      "endTime": "5:00 P.M."
    }
  ]

  constructor(private router : Router, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAllAppointmentBookedFunction();
  }

  public getAllAppointmentBookedFunction = () =>{
    this.appointmentService.getAllAppointmentBooked().subscribe((apiResponse) =>{
      // console.log("api response for getting all appointment booked", apiResponse);
      if(apiResponse && apiResponse.status === 200){
        this.timeSlotList = this.timeSlotList.map(obj => apiResponse.data.find(o => o.id === obj.id) || obj);
        // console.log(this.timeSlotList)
      }
    })
  }

  gotoAddAppointment(slot) {
    this.router.navigateByUrl('/appointment/create', { state: slot });
  }

  gotoUpdateAppointment(slot) {
    this.router.navigateByUrl('/appointment/update', { state: slot });
  }

}
