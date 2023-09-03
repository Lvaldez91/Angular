import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'Ironman','Blue', 'Rossellin']
  public deleteHero?: string;

  removeItemHero():void{
    //this.heroName.shift();
    //if (this.heroName.length == 0)
    this.deleteHero = this.heroName.pop();
  }



}
