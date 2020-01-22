import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Julien";

  constructor() {
    this.changeName('Ted');
  }

  // :void means it doesn't return anything
  changeName(name:string):void {
    this.name = name;
  }
}
