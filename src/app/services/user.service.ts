import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
selecteduser:User;
userlist:User[];
readonly rootURL ="http://localhost:63859/api";
  constructor(private fb: FormBuilder,private http : HttpClient) {
    console.log("user service cons");
   }
   formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });
  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
   postUser(usr : User)
   {
    console.log("user service post"+usr);
     var reqHeader = new HttpHeaders({'No-Auth':'True'});
      return this.http.post(this.rootURL+'/User',usr,{headers:reqHeader}); 
    }
   login(formData) {
      console.log("click on login");
      console.log(formData);
      return this.http.post(this.rootURL + '/user/authenticate', formData);
    }
    userAuthentication(userName, password) {
      var data = "username=" + userName + "&password=" + password + "&grant_type=password";
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
      return this.http.post(this.rootURL + '/token', data, { headers: reqHeader });
    }
    getUsers(){
      console.log("user service get");
        this.http.get(this.rootURL+'/User')
        .toPromise().then(res => this.userlist = res as User[]);
     
    }
    getUser(userId:number){
      console.log("user service get");
       return this.http.get(this.rootURL+'/User/'+userId);
    }
    getUserClaims(){
      return  this.http.get(this.rootURL+'/User');
     }
    putUser(usr : User){
      console.log("user service put");
        return this.http.put(this.rootURL+'/User/'+usr.Id,usr);
     }
     deleteUser(id : number){
      console.log("user service delete");
        return this.http.delete(this.rootURL+'/User/'+id);
      
     }
     confirmEmail(emailModel)
     {
       console.log("confirm email post"+emailModel);
       var reqHeader = new HttpHeaders({'No-Auth':'True'});
        return this.http.post(this.rootURL+'/user/confirmemail',emailModel); 
      }
      generateOtp(phoneNoModel)
     {
       console.log("generate otp post"+phoneNoModel);
       var reqHeader = new HttpHeaders({'No-Auth':'True'});
        return this.http.post(this.rootURL+'/user/generateotp',phoneNoModel); 
      }
      validateOtp(phoneNoModel)
      {
        console.log("validate otp post"+phoneNoModel);
        var reqHeader = new HttpHeaders({'No-Auth':'True'});
         return this.http.post(this.rootURL+'/user/validateotp',phoneNoModel); 
       }
       updatePanNo(panNoModel)
       {
         console.log("update pan no post"+panNoModel);
         var reqHeader = new HttpHeaders({'No-Auth':'True'});
          return this.http.post(this.rootURL+'/user/updatepan',panNoModel); 
        }
}
