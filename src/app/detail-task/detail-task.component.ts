import { Component, OnInit, Input } from '@angular/core';
//import perso
import{Tasks} from '../Tasks';
import { Router } from 'node_modules/@angular/router/fesm5/router.js';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})

export class DetailTaskComponent implements OnInit {
  @Input() task : Tasks;
  @Input() tasks : Array<Tasks>;
  Deadline : string;
  constructor(private service : TaskServiceService, private router : Router) {
    this.task = new Tasks();
   }

  ngOnInit() {
      this.Deadline = this.task.DeadLine.toString();
      this.Deadline = this.Deadline.substr(0, 10);
  }

  onSubmitDelete(){
    console.log('On a la tache :' + this.task.ID);
    this.service.deleteTask(this.task.ID);
    this.tasks.splice(this.tasks.findIndex(t => this.task.ID === t.ID), 1);
    console.log('on finit le delete dans le componnent');
    this.router.navigate(['listTasks']);    
  }

  onSubmitUpdate(){
    console.log("update");
    console.log(this.task.ID);
    this.task.DeadLine = new Date(this.Deadline);
    this.service.updateTask(this.task.ID, this.task.Note, this.task.TaskState, this.Deadline);
  }

}
