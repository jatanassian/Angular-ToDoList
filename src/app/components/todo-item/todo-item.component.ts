import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes. We always want the todo to have the class of todo, but we want it to have the is-complete class only if the completed property of that todo is true
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed // Put it in quotes because of the hypen
    }

    return classes;
  }

  onToggle(todo) {
    console.log('toggle');
  }

  onDelete(todo) {
    console.log('delete');
  }

}
