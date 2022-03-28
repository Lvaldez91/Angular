import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeServices } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})

export class HeroeComponent implements OnInit{
  heroe: any = {};
  hcasa: string;
  constructor(private activeRoute: ActivatedRoute, private _heroesService: HeroeServices) {
  this.activeRoute.params.subscribe(params => {
    console.log(params['id']);
    this.heroe = this._heroesService.getHeroe(params['id']);

    if(this.heroe.casa === 'DC'){
      this.hcasa = 'assets/img/dc.png';
    } else {
      this.hcasa = 'assets/img/marvel.png';
    }
    console.log(this.heroe);
  });
  }

  ngOnInit(): void {
  }

}
