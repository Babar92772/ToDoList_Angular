import { Injectable } from '@angular/core';
import { Tasks } from './Tasks';
//import { TASK } from './mock_task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task : Tasks
  url = 'https://todolistwebapi20180823030718.azurewebsites.net/api/TaskApi';
  constructor(private http: HttpClient) { 
    //this.task = TASK;
    
  }
  getTask(){
    console.log(this.http.get(this.url+'/All'));
    return this.http.get(this.url+'/All');
    //return of(this.task);
  }

  addTask(Note, deadLine) {
    this.task = new Tasks();
    this.task.Note = Note;
    this.task.CreateDate = new Date();
    this.task.TaskState = "todo";
    this.task.DeadLine = deadLine;
    this.http.post(this.url+'/ADD/',this.task);

   // this.task.push(task);
    console.log("dans le service on add tadammmm "+Note);
  }

  // deleteTask(id:number) {
  //   console.log(id);
  //   // const uri = 'http://localhost:4000/note' + id;

  //   // return this
  //   //     .http.delete(uri).subscribe;
  //   const index: number = this.task.indexOf(this.task[id]);
  //   console.log(index);
    
  //   if (index !== -1) {
  //     console.log(this.task.splice(index, index+1));
      
  //       //this.task.splice(index-1, 1);
  //   }        
  //   //console.log(this.task.slice(id-1,id));
  //   //this.task = this.task.slice(id,1); 
  // }

  updateTask( id:number, note:string, status:string){
    console.log(this.task[id-1]);
    
    this.task[id-1].TaskState = status;
    this.task[id-1].Note = note;
  }
}
