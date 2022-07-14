import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.css'],
})
export class DoneTodoComponent implements OnInit {
  @Input() checkTask: string = '';
  constructor() {}

  ngOnInit(): void {}
}
