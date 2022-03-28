import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  // Input puede o no venir de afuera
  @Input() heroe: any = {};
  @Input() index: number;
  // Eventemitter es una propiedad de angular donde se le indica que tipo de dato va recibir
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router: Router) {
    // inicializando evento
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  VerHeroe(){
    // console.log(this.index);
    // this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
