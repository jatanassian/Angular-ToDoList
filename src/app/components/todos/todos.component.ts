import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // The [] specify that this is gonna be an array.
  todos:Todo[];

  constructor() { }

  ngOnInit() {
  }

}
