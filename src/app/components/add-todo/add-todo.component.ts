import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // We're using <any> because it doesn't have an id, it's not formatted as our model

  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      // We don't need the id because jsonplaceholder creates the id for us
      title: this.title,
      completed: false
    }

    // Just like delete, we have to emit this to the parent because we need access to the direct todos in the todo component
    this.addTodo.emit(todo);
  }

}
