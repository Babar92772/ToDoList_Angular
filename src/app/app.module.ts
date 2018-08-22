import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/Router';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
//import Perso
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

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
    FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
