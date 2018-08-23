import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks:Array<Task>;
  constructor(private taskServe:TaskServiceService){}

  ngOnInit() {
    this.taskServe.getTask().subscribe (
      listTask=> {this.tasks = listTask; //console.log(this.tasks);
    }
    );
  }

}
