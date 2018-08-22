import { Injectable } from '@angular/core';
import { Task } from './Task';
import { TASK } from './mock_task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task : Array<Task>
  constructor(private http: HttpClient) { 
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
    // const uri = 'http://localhost:4000/note' + id;

    // return this
    //     .http.delete(uri).subscribe;
    console.log(this.task.slice(id,2));
  }

  updateTask( id:number, note:string, status:string){
    console.log(this.task[id-1]);
    
    this.task[id-1].status = status;
    this.task[id-1].note = note;
  }
}
