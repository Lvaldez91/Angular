import { Component } from '@angular/core';
import { homeSize } from 'src/app/shared/variables/layouts.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public tipo:number = homeSize.tipo;

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
