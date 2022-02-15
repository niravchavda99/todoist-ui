import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-open-todos',
  templateUrl: './open-todos.component.html',
  styleUrls: ['./open-todos.component.css']
})
export class OpenTodosComponent implements OnInit {

  title = 'todoist-ui';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getOpenTodos().subscribe(todos => this.todos = todos);
  }

  onSubmit(form: NgForm) {
    let todo: Todo = {title: form.value.title, status: "OPEN"};
    this.todoService.save(todo).subscribe(todo => {
      console.log("Saved", todo);
      this.todos.push(todo);
      form.resetForm();
    });
  }

  markTodoAsClosed(todoId: number | undefined): void {
    console.log("HERWE");
    const todo = this.findTodoById(todoId);
    if(todo) todo.status = "CLOSED";

    this.todoService.updateTodo(todo).subscribe(updatedTodo => {
      if (updatedTodo.status === "CLOSED") {
        this.todos = this.todos.filter(todo => todo.id !== updatedTodo.id);
      }
    });
  }

  findTodoById(todoId: number | undefined) {
    return this.todos.find(todo => todo.id === todoId);
  }
}
