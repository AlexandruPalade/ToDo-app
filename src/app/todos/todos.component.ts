import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() tasks: string[] = [];
  @Output() checkTask = new EventEmitter<string>();
  @Output() removeTask = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onCheckTask(task: string) {
    this.checkTask.emit(task);
  }

  onRemoveTask(task: string) {
    this.removeTask.emit(task);
  }
}
