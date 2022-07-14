import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent implements OnInit {
  tasks: string[] = [];
  checkTasks: string[] = [];

  @Output() checkTask = new EventEmitter<string>();
  @Output() removeTask = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onTaskAdded(task: string) {
    this.tasks.push(task);
    console.log(task);
  }
  onTaskRemove(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(task);
  }

  onTaskChecked(task: string) {
    this.checkTask.emit(task);
    this.checkTasks.push(task);
    this.tasks.splice(this.tasks.indexOf(task, 1));
  }
}
