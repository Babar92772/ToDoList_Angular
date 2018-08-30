import { Component, OnInit, Input } from '@angular/core';
//import perso
import{Tasks} from '../Tasks';
import { Router } from 'node_modules/@angular/router/fesm5/router.js';
import { TaskServiceService } from '../task-service.service';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})

export class DetailTaskComponent implements OnInit {
  @Input() task : Tasks;
  @Input() tasks : Array<Tasks>;
  Deadline : string;
  CreateDate : string;
  isSpawn: boolean = false;
  constructor(private service : TaskServiceService, private router : Router, private component : TodolistComponent) {
    this.task = new Tasks();
  }
  
  ngOnInit() {
    this.Deadline = this.task.DeadLine.toString();
    this.Deadline = this.Deadline.substr(0, 10);
    console.log(this.Deadline);
    this.CreateDate = this.task.CreateDate.toString();
    this.CreateDate = this.CreateDate.substr(0, 10);
    console.log(this.CreateDate);
    
  }
  
  spawn(value:boolean){
    this.isSpawn = value;
  }
  
  onSubmitDelete(){
    console.log('On a la tache :' + this.task.ID);
    this.service.deleteTask(this.task.ID).subscribe(s => this.component.UpdateInit());
    //this.component.UpdateInit()
    //this.tasks.splice(this.tasks.findIndex(t => this.task.ID === t.ID), 1);
    //console.log('on finit le delete dans le componnent');
    //this.router.navigate(['listTasks']);    
  }
  
  onSubmitUpdate(){
    console.log("update");
    console.log(this.task.ID);
    this.task.DeadLine = new Date(this.Deadline);
    this.service.updateTask(this.task.ID, this.task.Note, this.task.TaskState, this.Deadline).subscribe(s => this.component.UpdateInit());
    //this.component.UpdateInit()
    this.isSpawn = false;
  }
  
}
