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
  constructor(private service : TaskServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.deleteTask(this.task.id);
    console.log('on finit le delete dans le componnent');
    
  }

}
