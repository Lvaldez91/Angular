import { keyframes } from '@angular/animations';
import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoPost = [];
    if (arg == '' || arg.length < 3) return value;
    
    return resultadoPost;
  }
}
