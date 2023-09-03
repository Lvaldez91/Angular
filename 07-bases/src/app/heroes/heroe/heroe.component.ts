import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  public name:string ='luz valdez';
  public age: number=19;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Luz'
  }

  changeAge():number{
    this.age = 32;
    document.querySelector('h1')!.innerText='Bienvenido';
    return this.age;
  }

}
