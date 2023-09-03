import {Component} from "@angular/core"

@Component({
  selector: 'app-counter',
  template: `<h1>Hola</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increseBy()">Increse</button>
    <button (click)="decreatBy()">Decrete</button>
  `
})

export class CounterComponent{
  public counter:number=0;

  resetBy():void{
    this.counter = 0;
  }

  increseBy():void{
    this.counter +=1;
  }

  decreatBy():void{
    if (this.counter== 0){
      alert('No tiene numero valido');
    } else {
      this.counter -=1;
    }
  }
}
