import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {
  public currentAppointmentData;
  timeSlot: string;

  constructor(public toastr: ToastrManager,private _route:ActivatedRoute,private router:Router, private appointmentService: AppointmentService) {
    this.currentAppointmentData = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
    // console.log(this.currentAppointmentData);
    if(this.currentAppointmentData === undefined){
      this.router.navigate(['/home']);
    } else{
      this.timeSlot = `${this.currentAppointmentData.startTime} - ${this.currentAppointmentData.endTime}`
    }
  }

  public goToHome(): any {
    this.router.navigate(['/home']);
  }

  public updateAppointmentDetail(): any{
    this.appointmentService.updateAppointmentBooked(this.currentAppointmentData.appointmentId, this.currentAppointmentData).subscribe((apiResponse) =>{
      if(apiResponse && apiResponse.status === 200){
        this.toastr.successToastr("Appointment booking updated");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      } else {
        this.toastr.warningToastr("SomeThing went wrong while updating appointment");
      }
    })
  }

}
