import { Injectable, OnInit } from '@angular/core';
import { Archivo, Articulo } from '../interface/archivo.interface';
import { PortadaService } from './portada.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService implements OnInit {
  public searchText: any;
  private articulo: Articulo[] =[];


  constructor(private service:PortadaService){

  }

  ngOnInit(): void {
    this.getDataPortada();
  }

  getDataPortada():void {
    var portada = this.service.getPortadaData('x');
    //this.articulo.push(portada);
    console.log(portada);
    //return this.articulo;
  }
}
