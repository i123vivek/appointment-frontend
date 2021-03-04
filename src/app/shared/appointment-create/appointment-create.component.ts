import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  public receivedData: any;
  public timeSlot: any;
  public firstName: string;
  public lastName: string;
  public phoneNo: string;

  constructor(public toastr: ToastrManager, private _route: ActivatedRoute, private router: Router, private appointmentService: AppointmentService) {
    this.receivedData = this.router.getCurrentNavigation().extras.state;
    
  }

  ngOnInit() {
    // console.log(this.receivedData);
    if(this.receivedData === undefined){
      this.router.navigate(['/home']);
    } else{
      this.timeSlot = `${this.receivedData.startTime} - ${this.receivedData.endTime}`
    }
  }

  public goToHome(): any {
    this.router.navigate(['/home']);
  }

  public bookAppointment(): any{
    let appointmentData = {
      id: this.receivedData.id,
      startTime: this.receivedData.startTime,
      endTime: this.receivedData.endTime,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNo: this.phoneNo
    }

    // console.log("data for booking appointment", appointmentData);

    this.appointmentService.bookAppointment(appointmentData).subscribe((apiResponse) =>{
      if(apiResponse && apiResponse.status === 200){
        // console.log("appointment booked", apiResponse.data);
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      } else {
        this.toastr.warningToastr("SomeThing went wrong while booking appointment");
      }
    })
  }

}
