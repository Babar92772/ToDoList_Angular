import { Component, OnInit, NgModule } from '@angular/core';
import { Tasks } from '../Tasks';
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
  task:Tasks;
  Note: String;
  DeadLine: String;
  taskForm:FormsModule;
  constructor(private service : TaskServiceService, private fb:FormBuilder) { 
    this.task = new Tasks();
    this.Note ="";
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('on finit le add dans le componnent'+this.Note+this.DeadLine);

    this.service.addTask(this.Note, this.DeadLine);
    
    this.task = new Tasks();
  }

}
