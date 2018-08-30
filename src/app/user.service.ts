import { Injectable } from '@angular/core';
import { Users } from './Users';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url = 'https://todolistwebapi20180823030718.azurewebsites.net/api/UserConnexion/';
  url = 'https://todolistwebapi20180823030718.azurewebsites.net/api/UserConnexion/Connect/';
  url2 = 'https://todolistwebapi20180823030718.azurewebsites.net/api/UserApi/ADD/%7Buser%7D}';
  user : Users;
  
  constructor(private http: HttpClient) { 
    this.user = new Users();
  }

  Login(Pseudo, Pwd):Observable<Users>{
    //this.user = this.http.get(this.url+'/Connect/'+ pseudo +'/'+pwd);
    //return this.http.get<Users>(this.url+'/Connect/'+ pseudo +'/'+pwd)
    // return this.http.get<Users>(this.url+"/Connect/");
    console.log(this.url+ Pseudo + '/' + Pwd);
    var test = this.http.get<Users>(this.url+ Pseudo +'/'+Pwd);
    console.log(test);
    
    return test;
    
  }

  SignUp(Usernew){
    return this.http.post(this.url2, Usernew);
  }
  
}
