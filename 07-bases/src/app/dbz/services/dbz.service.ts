import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku', power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta', power: 1000
    },
    {
      id: uuid(),
      name: 'Vulma', power: 1000
    }
  ];

  onNewCharacter(Character: Character):void{
    const newCharacter: Character = {
      id:uuid(),...Character };

    this.characters.push(newCharacter);
  }

  onDelete(id: string):void{
    this.characters = this.characters.filter(characters => characters.id !== id);
    //this.characters.splice(id,1);
  }

}
