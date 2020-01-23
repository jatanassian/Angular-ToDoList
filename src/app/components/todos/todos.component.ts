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

  }

}
