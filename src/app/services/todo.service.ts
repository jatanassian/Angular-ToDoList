import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Add the url as a property of this class
  todosUrl: 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  // Method that makes the get request just like axios or the fetch api.
  // With '<Todo[]>' we're specifying that it's gonna be a Todo type and an array.
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
}