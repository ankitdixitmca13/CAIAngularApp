import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

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
    this.service.selecteduser = {
      Id: null,
      UserName: '',
      EmailId: '',
      Password: '',
      IsActivated:'',
      IsDeleted:''
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'User.Register');
      this.resetForm(form);
      this.service.getUser();
    });
  }
  updateRecord(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'User.Register');
      this.resetForm(form);
      this.service.getUser();
    });

  }

}
