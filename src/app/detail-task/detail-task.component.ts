import { Component, OnInit, Input } from '@angular/core';
//import perso
import{Task} from '../Task';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {
  @Input() task : Task;
  constructor(private service : TaskServiceService) {
    this.task = new Task();
   }

  ngOnInit() {
  }

  onSubmitDelete(){
    console.log(this.task.id);
    
    this.service.deleteTask(this.task.id);
    console.log('on finit le delete dans le componnent');
    
  }

  onSubmitUpdate(){
    console.log("update");
    console.log(this.task.id);
    
    this.service.updateTask(this.task.id, this.task.note, this.task.status);
  }

}
