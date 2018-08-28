import { Component, OnInit, Input } from '@angular/core';
//import perso
import{Tasks} from '../Tasks';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {
  @Input() task : Tasks;
  constructor(private service : TaskServiceService) {
    this.task = new Tasks();
   }

  ngOnInit() {
  }

  // onSubmitDelete(){
  //   console.log(this.task.ID);
    
  //   this.service.deleteTask(this.task.ID);
  //   console.log('on finit le delete dans le componnent');
    
  // }

  onSubmitUpdate(){
    console.log("update");
    console.log(this.task.ID);
    
    this.service.updateTask(this.task.ID, this.task.Note, this.task.TaskState);
  }

}
