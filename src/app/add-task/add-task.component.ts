import { Component, OnInit, NgModule } from '@angular/core';
import { Task } from '../Task';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:Task;
  taskForm:FormsModule;
  constructor(private service : TaskServiceService, private fb:FormBuilder) { 
    this.task = new Task();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.service.addTask(this.task);
    console.log('on finit le add dans le componnent');
    this.task = new Task();
  }

}
