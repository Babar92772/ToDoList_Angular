import { Component, OnInit } from '@angular/core';
import { Tasks } from '../Tasks';
import { TaskServiceService } from '../task-service.service';
import { Users } from '../Users';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks:any;
  user: Users;
  constructor(private taskServe:TaskServiceService){}

  ngOnInit() {
    //console.log('jhgfdsq'+this.user.ID);
    
    this.tasks = this.taskServe.getTask().subscribe(tasks => {
      this.tasks = tasks as Tasks[]
    });
  
  }

}
