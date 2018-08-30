import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Tasks } from '../Tasks';
import { Users } from '../Users';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //@Input() user : Users;
  task:Tasks;
  Note: String;
  DeadLine: String;
  taskForm:FormsModule;
  constructor(private service : TaskServiceService, private fb:FormBuilder, private component : TodolistComponent) { 
    this.task = new Tasks();
    this.Note ="";
  }
  
  ngOnInit() {
    //console.log(this.user.ID);
  }
  
  onSubmit(){
    //console.log('on finit le add dans le componnent' + this.Note + ' / ' + this.DeadLine+' / ' + this.user.ID);
    this.service.addTask(this.Note, this.DeadLine).subscribe(s => this.component.UpdateInit());
    //this.component.UpdateInit()
    this.task = new Tasks();
    this.Note  ='';
    this.DeadLine = '';
  }
  
}
