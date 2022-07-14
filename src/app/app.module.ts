import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DoneTodosComponent } from './done-todos/done-todos.component';
import { DoneTodoComponent } from './done-todo/done-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    AddTodoComponent,
    TodosComponent,
    TodoComponent,
    DoneTodosComponent,
    DoneTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
