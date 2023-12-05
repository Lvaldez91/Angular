import { Injectable, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environments';
import { Articulo } from '../interface/archivo.interface';
import { Portada } from '../interface/portada.interface';

@Injectable({
  providedIn: 'root',
})
export class PortadaService {
  private url: string = '';


  //private http: HttpClient
  constructor() {
    this.url = `${environment.apiServer}${environment.apiService}`;
  }

  getPortadaData(folio: string): Articulo{
    let articulo!:Articulo;
    let portada!: Portada;
    try {
      // const GET_DATA =  `${this.url}....`;
      // var data = this.http.get(GET_DATA).subscribe(
      //   (response: any)=> {
      //     var resp = response;
      //     if (resp != null || resp != undefined) {
      //     } else {
      //     }
      //   }
      // );

      // define datos
      portada = {
        expediente:'350/2023',
        nombre: 'TOMO 1',
        fechaArchivo: '2023/09/09'
      };

      articulo =
        {
          titulo: 'portada',
          ruta: 'portadacjf',
          contenido: [
            { tag: 'p1', texto: 'SECRETARÍA GENERAL DE LA PRESIDENCIA UNIDAD DE PREVENCIÓN Y COMBATE A LA VIOLENCIA ABORAL Y AL ACOSO SEXUAL' },
            { tag: 'p2', texto: 'NÚMERO DE EXPEDIENTE:' },
            {
              tag: 'p3',
              texto: `{CJF}/{UPCVLAS}/${portada.expediente}`,
            },
            { tag: 'p4', texto: 'PERSONA USUARIA:' },
            {
              tag: 'p5',
              texto: `${portada.nombre}`,
            },
            { tag: 'p6', texto: 'FECHA DEL ARCHIVO:' },
            {
              tag: 'p7',
              texto: `${portada.fechaArchivo}`,
            }
          ]
        };

    } catch (e) {
      //console.log(e);
    }

    //console.log(articulo);
    return articulo;
  }
}
