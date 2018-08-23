import { Injectable } from '@angular/core';
import { User } from './User';
import { USER } from './mock_user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : Array<User>
  constructor() { 
    this.users = USER;
  }
  login():Observable<User[]>{
    return of(this.users);
  }

}
