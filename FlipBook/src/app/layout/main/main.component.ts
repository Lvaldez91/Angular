import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    // Obtener la configuración de las rutas
    const routes: Routes = this.router.config;

    // Recorrer las rutas y obtener la información que necesitas
    routes.forEach(route => {
      console.log('Ruta:', route);
      console.log('Path:', route.path);
      console.log('Componente asociado:', route.component);
      // Puedes acceder a más propiedades según tus necesidades
    });
  }
}
