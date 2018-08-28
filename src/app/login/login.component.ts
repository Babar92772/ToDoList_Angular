import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from 'node_modules/@angular/router/fesm5/router.js';
import { tick } from '@angular/core/src/render3';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users;
  userForm:FormsModule;
  Pseudo: string;
  Pwd : string;
  constructor(private service : UserService, private fb:FormBuilder, private router : Router) { 
    this.user = new Users();
    this.Pseudo = '';
    this.Pwd = '';
    
  }

  ngOnInit() {
    this.user = new Users();
    this.userForm = new FormsModule();
    this.Pseudo = '';
    this.Pwd = '';
  }

  onSubmitLogin(){
    
    console.log("submit " +this.Pseudo, this.Pwd);
    if(this.Pseudo != '' && this.Pwd != ''){
      this.service.Login(this.Pseudo, this.Pwd).subscribe(u =>{ this.user = u;
        console.log(this.user.Pseudo);
        console.log(this.user.ID);
        
        if( this.user.ID != null){
          console.log('valide');   
          this.router.navigate(['listTasks']);
        }
        else{    
          console.log("merde2");
          this.router.navigate(['']);
        }}); 
      
      console.log("zut");
    }

  //   var allUsers = this.service.login();
  //   console.log(allUsers);
  //   var test = false;
  //     allUsers.forEach(function (value) {
  //       value.forEach(function (entree) {
  //         console.log(entree.Pwd);
  //           if(entree.Pwd !=="undefined" && entree.Pseudo !=="undefined"){
  //             console.log(entree.Pseudo, entree.Pwd);
  //             if(entree.Pwd == Pwd && entree.Pseudo == Pseudo){
  //               console.log('entrée');
  //                location.replace(`http://localhost:4200/listTasks`);
  //                test = true;
  //             }
  //           }
          
          
          
  //       });
  //     }); 
  //   if(!test){
  //     alert('erreur');
  //   }
  //   console.log('errer');
  //   alert('erreur');
  // }

  }
}