import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'FormatoFec'})
export class FormatoFecha implements PipeTransform {
  transform(value: any, type:number): any {
    today: Date;
    var pipe = new DatePipe('es');
    var fecha:any;

    if((value == null && type == null ) || (value == undefined && type == undefined )){
      fecha = Date.now();
      type = 0;
    } else if(value == null && type != null){
      fecha = Date.now();
    } else if (value != null && type == null){
      type = 0;
    } else {
      fecha = value;
    }

    switch (type) {
      case 0: {
        // lugar + fecha completa texto - Monday, June 15, 2015
        fecha = `${pipe.transform(fecha, 'EEEE, MMMM d, y')}`;
        break;
      }
      case 1: {
        //medio - Jun 15, 2015, 9:03:01 AM
        fecha = pipe.transform(fecha, 'MMM d, y, h:mm:ss a')
        break;
      }
      case 2: {
        //longDate - June 15, 2015
        fecha = pipe.transform(fecha, 'MMMM d, y')
        break;
      }
      case 3: {
        //shortDate
        fecha = pipe.transform(fecha, 'yyyy/MM/dd')
        break;
        break;
      }
      case 4: {
        //shortTime - 9:03 AM
        fecha = pipe.transform(fecha, 'h:mm a')
        break;
        break;
      }
    }
    return fecha;
  }
}
