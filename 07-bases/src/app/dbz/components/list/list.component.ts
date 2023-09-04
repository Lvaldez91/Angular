import { Component, Input, EventEmitter , Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-bdz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Output()
  public onDeleteEmiter: EventEmitter<string> = new EventEmitter();

  public dbz: string[] = ['Goku', 'Vegeta','Vulma', 'Gohan']

  @Input()
  public characterList: Character[] = [
    {
      name: 'Vulma', power: 1000
    }
  ];

  onDelete(id?:string):void{
    if(!id) return;
    this.onDeleteEmiter.emit(id);
  }
}
