import {Component} from '@angular/core';
import {TodoService} from "./todo.service";
import {NgForm} from "@angular/forms";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoist-ui';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.get().subscribe(todos => this.todos = todos);
  }

  onSubmit(form: NgForm) {
    let todo: Todo = {title: form.value.title, status: "OPEN"};
    this.todoService.save(todo).subscribe(todo => {
      console.log("Saved", todo);
      this.todos.push(todo);
    });
  }
}
