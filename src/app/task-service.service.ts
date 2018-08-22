import { Injectable } from '@angular/core';
import { Task } from './Task';
import { TASK } from './mock_task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task : Array<Task>
  constructor() { 
    this.task = TASK;
  }
  getTask():Observable<Task[]>{
    return of(this.task);
  }

  addTask(task:Task) {
    this.task.push(task);
    console.log("dans le service on add tadammmm "+this.task);
  }

  deleteTask(id:number) {
    console.log(id);
    this.task[id].note;
  }
}
