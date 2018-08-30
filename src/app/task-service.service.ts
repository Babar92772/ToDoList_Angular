import { Injectable } from '@angular/core';
import { Tasks } from './Tasks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TodolistComponent } from './todolist/todolist.component';
import { HttpHeaders } from '@angular/common/http';
import { utf8Encode } from '@angular/compiler/src/util';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task : Tasks;
  taskJson : string;
  update : any;
  url = 'https://todolistwebapi20180823030718.azurewebsites.net/api/TaskApi';
  constructor(private http: HttpClient) {   
  }
  
  getTask(){
    var todo = this.http.get(this.url+'/Todo/'+localStorage.getItem('IdUserSession'));
    var progress = this.http.get(this.url+'/Progress/'+localStorage.getItem('IdUserSession'));
    var done = this.http.get(this.url+'/Done/'+localStorage.getItem('IdUserSession'));
    var info = [todo, progress, done];
    return info;
  }
  
  addTask(Note, deadLine){
    this.task = new Tasks();
    this.task.Note = Note;
    this.task.CreateDate = new Date();
    this.task.TaskState = "todo";
    this.task.DeadLine = deadLine;
    this.task.IDUserCreator = parseInt(localStorage.getItem('IdUserSession'));
    
    console.log(this.url+'/ADD/%7Btask%7D',this.task);
    
    return this.http.post(this.url+'/ADD/%7Btask%7D', this.task);
    //return this.http.post(this.url+'/ADD/%7Btask%7D', this.task).subscribe(s => this.component.UpdateInit());
    
  }
  
  deleteTask(id:number) {
    console.log('On supprime la tache ' + id);
    return this.http.delete(this.url + '/DEL/' + id);
    //this.http.delete(this.url + '/DEL/' + id).subscribe(s => this.component.UpdateInit());
  }
  
  updateTask( id:number, note:string, status:string, deadLine:string){
    this.task = new Tasks();
    this.task.ID = id;
    this.task.Note = note;
    this.task.TaskState = status;
    this.task.DeadLine = new Date(deadLine);
    console.log(JSON.stringify(this.task));
    console.log(this.url+'/EDIT/'+JSON.stringify(this.task),httpOptions);
    
    return this.http.put(this.url+'/EDIT/%7Btask%7D', JSON.stringify(this.task), httpOptions);
    //return this.http.put(this.url+'/EDIT/%7Btask%7D', JSON.stringify(this.task), httpOptions).subscribe(s => this.component.UpdateInit());
  }
}
