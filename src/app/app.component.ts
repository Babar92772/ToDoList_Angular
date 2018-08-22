import { Component } from '@angular/core';
import { Task } from './Task';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  //   <h2>{{master}} controls {{heroes.length}} heroes</h2>
  //   <app-detail-task *ngFor="let t of task"
  //     [task]="t">
  //   </app-detail-task>
  // `
})
export class AppComponent {
  tasks:Array<Task>;
  constructor(private taskServe:TaskServiceService){}

  ngOnInit() {
    this.taskServe.getTask().subscribe (
      listTask=> {this.tasks = listTask; //console.log(this.tasks);
      }
    );
  }
}
