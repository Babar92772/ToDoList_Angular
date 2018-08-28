import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from 'node_modules/@angular/router/fesm5/router.js';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
//import Perso
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskServiceService } from './task-service.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes=[
  {path:'',component: LoginComponent},
  {path:'listTasks',component: TodolistComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DetailTaskComponent,
    AddTaskComponent,
    LoginComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [FormBuilder, TaskServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
