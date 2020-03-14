import { OnInit, Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirmpanno',
  templateUrl: 'confirmpanno.component.html'
})
export class ConfirmPanNoComponent {
  formModel = {
    UserId: 0,
    PanNo: ''
  }
  panPattern = "^[A-Za-z]{5}\d{4}[A-Za-z]{1}$"; 

  constructor(private service: UserService, private toastr: ToastrService, private router: Router) {
    console.log('Called pan Constructor');
  }

  ngOnInit() {
    this.formModel.UserId = parseInt(localStorage.getItem('userId'));
  }
 
  onSubmit(form: NgForm) {
    this.service.updatePanNo(form.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard');
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
