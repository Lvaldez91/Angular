import { EventEmitter, Output, Pipe, PipeTransform } from '@angular/core';
import { searchs } from '../variables/variables.constant';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  //public bolEBandera = searchs.resultados;
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

    let busqueda = arr.filter((values, index, arreglo) => {
      return arreglo.findIndex(arr => JSON.stringify(arr) === JSON.stringify(values)) === index
    });

    if (busqueda.length >= 0){
      searchs.resultado =  true;
    } else {
      searchs.resultado =  false;
    }
    return busqueda;
  }
}
