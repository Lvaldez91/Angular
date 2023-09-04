import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService} from '../services/dbz.service';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDelete(id:string):void{
    this.dbzService.onDelete(id);
  }

  onNewCharacter(Character:Character):void{
    this.dbzService.onNewCharacter(Character);
  }

}
