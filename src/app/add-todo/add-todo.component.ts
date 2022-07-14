import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  task: string = '';
  @Output() taskAdded = new EventEmitter<string>();
  @ViewChild('task') taskInput!: ElementRef<HTMLInputElement>;

  onAddTask(task: string) {
    this.taskAdded.emit(task);
    this.taskInput.nativeElement.value = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
