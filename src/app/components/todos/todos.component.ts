import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // The [] specify that this is gonna be an array. The app doesn't know what a Todo is so we created a Todo model in the models folder that we imported.
  todos:Todo[];

  // 'Private' means it only works here
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // We're subscribing to the observable. It pretty much works like .then
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
