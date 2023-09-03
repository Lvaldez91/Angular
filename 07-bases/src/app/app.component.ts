import { Component } from '@angular/core';

// decorador que tranforma la clase de todo el componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title:string = 'Hola Luz';
}
