import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.css'],
})
export class DoneTodosComponent implements OnInit {
  @Input() checkTasks: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
