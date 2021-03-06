import { Component, OnInit } from '@angular/core';
import { Tasks } from '../Tasks';
import { TaskServiceService } from '../task-service.service';
import { Users } from '../Users';
import { Router } from 'node_modules/@angular/router/fesm5/router.js';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  tasks:Array<Tasks>;
  user: Users;
  todo: Array<Tasks>;
  progress:Array<Tasks>;
  done:Array<Tasks>;
  isSpawnAdd: boolean = false;
  constructor(private taskServe:TaskServiceService, private router : Router){}
  
  ngOnInit() {
    console.log('id : '+ localStorage.getItem('IdUserSession'));
    
    var info = this.taskServe.getTask();
    info[0].subscribe(tasks => {
      this.todo = tasks as Array<Tasks>
    });
    info[1].subscribe(tasks => {
      this.progress = tasks as Array<Tasks>
    });
    info[2].subscribe(tasks => {
      this.done = tasks as Array<Tasks>
    });
  }

  spawnAdd(value:boolean){
    this.isSpawnAdd = value;
  }
  spawnAddDel(value:boolean){
    this.isSpawnAdd = value;
  }
  onSubmitDeco(){
    localStorage.setItem('IdUserSession', null);
    this.router.navigate(['']);
  }
  UpdateInit(){
    this.todo = new Array<Tasks>();
    this.progress = new Array<Tasks>();
    this.done = new Array<Tasks>();
    this.tasks = new Array<Tasks>();
    
    var info = this.taskServe.getTask();
    info[0].subscribe(tasks => {
      this.todo = tasks as Array<Tasks>
    });
    info[1].subscribe(tasks => {
      this.progress = tasks as Array<Tasks>
    });
    info[2].subscribe(tasks => {
      this.done = tasks as Array<Tasks>
    });
  }
}
