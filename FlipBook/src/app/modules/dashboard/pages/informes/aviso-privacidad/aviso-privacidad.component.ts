import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviso-privacidad',
  templateUrl: './aviso-privacidad.component.html',
  styleUrls: ['./aviso-privacidad.component.scss']
})
export class AvisoPrivacidadComponent {
  public verModal:boolean = false;
  constructor(private router: Router){
    if (document.location.href.includes('aviso')) {
      this.verModal = true;
    } else {
      this.verModal = false;
    }
  }
}
