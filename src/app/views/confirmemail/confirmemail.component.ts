import { OnInit,Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmemail',
  templateUrl: 'confirmemail.component.html'
})
export class ConfirmEmailComponent {
  emailModel = {
    emailKey: ''
  }
  constructor(private service: UserService,  private toastr: ToastrService,private activatedRoute: ActivatedRoute) {
    console.log('Called Constructor');
   
   }

  ngOnInit() {
    this.emailModel.emailKey=this.activatedRoute.snapshot.params.emailKey;
    this.service.confirmEmail(this.emailModel).subscribe(
      res => {
      //this.toastr.success('Inserted successfully', 'User.Register');
      //this.router.navigateByUrl('/login');
    });
  }
    //read from key from url and send to api 
      //this.router.navigateByUrl('/dashboard');
 }
