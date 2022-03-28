import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeroeServices, Heroe} from '../../../services/heroes.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private Route: Router) { }

  ngOnInit(): void {
    console.log(this.heroes);
  }

  BuscarHeroe(TextHeroe: string){
    this.Route.navigate(['/search', TextHeroe]);
  }

}
