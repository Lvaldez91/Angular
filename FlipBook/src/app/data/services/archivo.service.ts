import { Injectable, OnInit } from '@angular/core';
import { Archivo, Articulo } from '../interface/archivo.interface';
import { PortadaService } from './portada.service';
import { FormularioAtencionService } from './formularioAtencion.service';
import { DiligenciaLlamadaService } from './diligenciaLlamada.service';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService implements OnInit {
  private url: string = '';
  public searchText: any;
  private articulo: Articulo[] =[];


  constructor(private service:PortadaService, private diligencia: DiligenciaLlamadaService){
    this.url = `${environment.apiServer}${environment.apiService}`;
  }

  ngOnInit(): void {
    this.getDataPortada();
  }

  getDataPortada():void {
    var portada = this.service.getPortadaData('x');
    var formulario = this.diligencia.getDataDiligenciaLlamada();
    this.articulo.push(portada);
    console.log(portada);
    //return this.articulo;
  }

  

}
