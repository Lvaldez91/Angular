import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku', power: 1000
    },
    {
      name: 'Vegeta', power: 1000
    },
    {
      name: 'Vulma', power: 1000
    }
  ];

  onNewCharacter(Character: Character):void{
    this.characters.push(Character);
  }

  onDelete(index: number):void{
    this.characters.splice(index,1);
  }

}
