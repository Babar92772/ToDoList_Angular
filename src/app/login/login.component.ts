import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Route } from '@angular/Router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  userForm:FormsModule;
  route: Route;
  constructor(private service : UserService, private fb:FormBuilder) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmitLogin(){
    var pwd = this.user.pwd;
    var pseudo = this.user.pseudo;
    console.log(pseudo, pwd);
    
    var allUsers = this.service.login();
    console.log(allUsers);
    var test = false;
      allUsers.forEach(function (value) {
        value.forEach(function (entree) {
          console.log(entree.pwd);
            if(entree.pwd !=="undefined" && entree.pseudo !=="undefined"){
              console.log(entree.pseudo, entree.pwd);
              if(entree.pwd == pwd && entree.pseudo == pseudo){
                console.log('entrée');
                 location.replace(`http://localhost:4200/listTasks`);
                 test = true;
              }
            }
          
          
          
        });
      }); 
    if(!test){
      alert('erreur');
    }
    // console.log('errer');
    // alert('erreur');
  }

}
