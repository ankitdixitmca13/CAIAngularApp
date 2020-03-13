import { OnInit, Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-confirmphone',
  templateUrl: 'confirmphone.component.html'
})
export class ConfirmPhoneNoComponent {
  formModel = {
    UserId: 0,
    PhoneNo: '',
    Otp: ''
  }
  constructor(private service: UserService, private toastr: ToastrService, private router: Router) {
    console.log('Called phone Constructor');
  }

  ngOnInit() {
    this.formModel.UserId = parseInt(localStorage.getItem('userId'));
    console.log(this.formModel.UserId);
    this.service.getUser(this.formModel.UserId).subscribe
      (
        (res: any) => {
          this.generateOtp(res);
        },
        (err: HttpErrorResponse) => {
          if (err.status == 400) {
            this.toastr.error(err.error.message);
          }
          else
            console.log(err);
        }
      )
  }
  generateOtp(res) {
    this.formModel.PhoneNo = res.mobileNo;
    console.log(this.formModel);
    this.service.generateOtp(this.formModel).subscribe
      (
        (res: any) => {
        },
        (err: HttpErrorResponse) => {
          if (err.status == 400) {
            this.toastr.error(err.error.message);
          }
          else
            console.log(err);
        }
      )
  }
  onSubmit(form: NgForm) {
    console.log(this.formModel);
    this.service.validateOtp(this.formModel).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/confirmpanno');
      },
      (err:HttpErrorResponse) => {
        if (err.status == 400)
        {
          this.toastr.error(err.error.message);
        }
        else
          console.log(err);
      }
    );
  }
}
