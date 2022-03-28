import { Component, OnInit } from '@angular/core';
// importando servicio}
import {ActivatedRoute} from '@angular/router';
import {HeroeServices} from '../../services/heroes.services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  ArrHeroe: any[] = [];
  Nombre: string;

  constructor(private _HeroesServices: HeroeServices,  private activeRoute: ActivatedRoute) {
    console.log('constructor search Lux');
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params['TextHeroe']);
      this.Nombre = params['TextHeroe'];
      this.ArrHeroe = this._HeroesServices.BuscarHeroe(params['TextHeroe']);
      console.log('Entrando a search arreglo');
      console.log(this.ArrHeroe);
    });
  }
}