import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiEndPoint = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {

  }

  save(todo: Todo) {
    return this.httpClient.post<Todo>(this.apiEndPoint + "/todos", todo);
  }

  getOpenTodos() {
    return this.httpClient.get<Todo[]>(this.apiEndPoint + "/todos/open");
  }

  getClosedTodos() {
    return this.httpClient.get<Todo[]>(this.apiEndPoint + "/todos/closed");
  }

  updateTodo(todo: Todo | undefined) {
    return this.httpClient.patch<Todo>(this.apiEndPoint + "/todos", todo);
  }
}
