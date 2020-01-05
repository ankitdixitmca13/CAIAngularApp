import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
selecteduser:User;
userlist:User[];
readonly rootURL ="http://localhost:44399/api";
  constructor(private http : HttpClient) {
    console.log("user service cons");
   }
   postUser(usr : User)
   {
    console.log("user service post"+usr);
     var reqHeader = new HttpHeaders({'No-Auth':'True'});
      return this.http.post(this.rootURL+'/User',usr,{headers:reqHeader}); 
     
       
    }
    userAuthentication(userName, password) {
      var data = "username=" + userName + "&password=" + password + "&grant_type=password";
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
      return this.http.post(this.rootURL + '/token', data, { headers: reqHeader });
    }
    getUser(){
      console.log("user service get");
        this.http.get(this.rootURL+'/User')
        .toPromise().then(res => this.userlist = res as User[]);
     
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

}
