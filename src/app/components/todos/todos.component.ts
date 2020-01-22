import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // The [] specify that this is gonna be an array. The app doesn't know what a Todo is so we created a Todo model in the models folder that we imported.
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        // With typescript, the app pays attention to the field and its type as well. If we change 'false' from completed by '1' it will show an error.
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ];
  }

}
