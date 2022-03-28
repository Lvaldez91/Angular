import { Component, OnInit } from '@angular/core';
import {HeroeServices, Heroe} from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  // Primero se ejecuta el Contructor y despues ngOnInit
  constructor(private _HeroesServices: HeroeServices,  private Route: Router) {
    console.log('constructor');
   }

  ngOnInit(): void {
    this.heroes = this._HeroesServices.getHeroes();
    console.log(this.heroes);
  }

  VerHeroe(idx: number){
    this.Route.navigate(['/heroe', idx]);
    console.log( idx );
  }

}