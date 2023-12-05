import { Pipe, PipeTransform } from '@angular/core';
import { searchs } from '../variables/search-results.constant';
import { __values } from 'tslib';
import { contenidoArticulo } from '../../data/interface/archivo.interface';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  public search: any = [];
  bandera: boolean = false;

  transform(values: any[], arg: string): any[] {
    if (!values) return [];
    if (!arg) return values;
    var arr: any[] = [];
    var _key:string;
    let ruta:string;
    let titulo:string;

    //Resultados Nivel 0:
    values.filter((item) => {
      Object.keys(item).some((key) => {
        this.bandera = String(item[key]).toLowerCase().includes(arg.toLowerCase());
        if (this.bandera && key !== 'articulo'){
          arr.push({_key : item[key], 'tag': key, 'ruta':'principal','titulo':'Datos Iniciales'});
        }
      });
    });

    // Resultados Nivel 1 & 2:
    values[0].articulo.filter((item: { [x: string]: any; }) => {
      Object.keys(item).some((key) => {
        this.bandera = String(item[key]).toLowerCase().includes(arg.toLowerCase());
        ruta = item['ruta'];
        titulo = item['titulo'];
        // if (this.bandera){
        //   _key = key;
        //   arr.push({_key:item[key], tag:key, ruta:ruta, titulo:titulo});
        // }
          item['contenido'].filter((items:{[x: string]: any;}) =>{
            ruta = item['ruta'];
            titulo = item['titulo'];
            Object.keys(items).some((keys) => {
              this.bandera = false;
              this.bandera = String(items[keys]).toLowerCase().includes(arg.toLowerCase());
              if (this.bandera && keys == 'texto'){
                arr.push({_key:items[keys], tag:items['tag'], ruta:ruta, titulo:titulo});
              }
            });
          });
      });
    });

    let busqueda = arr.filter((valorActual, indiceActual, arreglo) => {
      return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
  });

    console.log(busqueda);
    return busqueda;
  }
}
