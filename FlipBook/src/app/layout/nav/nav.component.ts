import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output () msRutas: EventEmitter<any> = new EventEmitter();
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

  getRoots():void {
    
  }
}
