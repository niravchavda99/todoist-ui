import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-closed-todos',
  templateUrl: './closed-todos.component.html',
  styleUrls: ['./closed-todos.component.css']
})
export class ClosedTodosComponent implements OnInit {
  closedTodos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getClosedTodos().subscribe(todos => this.closedTodos = todos);
  }
}
