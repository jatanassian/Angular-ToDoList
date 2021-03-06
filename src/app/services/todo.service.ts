import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Add the url as a property of this class
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Method that makes the get request just like axios or the fetch api.
  // With '<Todo[]>' we're specifying that it's gonna be a Todo type and an array.
  // The Observable is an asynchronous data flow. Like a  promise. On the client we'll then subscribe to that Observable which is like a '.then' in js.
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Put request when the checkbox is toggled
  // The type of the Observable is <any> because it won't be and exact Todo (it will have an user id)
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }
}
