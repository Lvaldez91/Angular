import { Component, Input, EventEmitter , Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-bdz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Output()
  public onDeleteEmiter: EventEmitter<number> = new EventEmitter();

  public dbz: string[] = ['Goku', 'Vegeta','Vulma', 'Gohan']

  @Input()
  public characterList: Character[] = [
    {
      name: 'Vulma', power: 1000
    }
  ];

  onDelete(index:number):void{
    this.onDeleteEmiter.emit(index);
  }
  onDeleteCharacter(index:number):void{
    console.log(index);
  }
}
