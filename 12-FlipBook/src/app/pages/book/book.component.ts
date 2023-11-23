import { ChangeDetectorRef, Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { typeLayout } from '../../shared/constants/layout-variable';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent{
public tipo:number = typeLayout.tipo;

constructor(){

}


getPrev(){
  if (this.tipo==0){
    this.tipo = 3;
  } else {
    this.tipo = this.tipo -1;
  }
}

getNext(){
  if (this.tipo>=3){
    this.tipo = 0;
  } else {
    this.tipo = this.tipo +1;
  }
}

}
