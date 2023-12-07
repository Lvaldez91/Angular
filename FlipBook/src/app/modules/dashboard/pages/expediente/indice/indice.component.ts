import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MenuItem } from 'src/app/data/interface/menuItems.interface';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent {
  public routes:any;
  public rutas: any;

  constructor(private router: Router,private route: ActivatedRoute){
  }

  ngOnInit(): void {
    let i = 0;
    const _routes: Routes = this.router.config;
    // rutas:
    _routes.forEach(route => {
      if(_routes[i].component?.name.toString() == 'MainComponent'){
        this.routes =_routes[i].children;
      }
      i = i + 1;
    });
    this.rutas = this.routes.filter((item: { path: string; }) => item.path !== 'expediente' && item.path !== '**');
   }

}
