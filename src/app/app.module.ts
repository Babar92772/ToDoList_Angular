import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/Router';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  
//import Perso
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskServiceService } from './task-service.service';
import { UserService } from './user.service';

const routes: Routes=[
  {path:'listTasks',component: DetailTaskComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DetailTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [FormBuilder, TaskServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
