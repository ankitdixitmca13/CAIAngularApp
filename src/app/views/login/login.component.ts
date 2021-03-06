import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/dashboard');
  }
  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.id);
        console.log(res.id);
        if(res.isEmailVerified)
        {
          alert(res.isMobileNoVerified);
          if(!res.isMobileNoVerified)
           this.router.navigateByUrl('/confirmphone');
          else if(!res.isPanNoVerified)
           this.router.navigateByUrl('/confirmpanno');
           else 
           this.router.navigateByUrl('/dashboard');
        }
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
