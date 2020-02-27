import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  formModel = {
      Id: null,
      UserName:'',
      EmailId: '',
      MobileNo:'',
      Password: '',
      ConfirmPassword: '',
      IsActivated:true,
      IsDeleted:false
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";   
  passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";

  constructor(private service:UserService,private toastr: ToastrService) { 
    console.log("register construtor");
  }

  ngOnInit() {
    console.log("register init");
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    // this.service.selecteduser = {
    //   Id: null,
    //   UserName: '',
    //   EmailId: '',
    //   Password: '',
    //   IsActivated:false,
    //   IsDeleted:''
    // }
  }
  onSubmit(form: NgForm) {
    console.log("regisetr");
    if (form.value.Id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'User.Register');
      this.resetForm(form);
      this.service.getUser();
    },
    (err:HttpErrorResponse) => {
      if (err.status == 400)
      {
        this.toastr.error(err.error.message);
      }
      else
        console.log(err);
    });
  }
  updateRecord(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'User.Register');
      this.resetForm(form);
      this.service.getUser();
    },
    (err:HttpErrorResponse) => {
      if (err.status == 400)
      {
        this.toastr.error(err.error.message);
      }
      else
        console.log(err);
    });

  }

}
