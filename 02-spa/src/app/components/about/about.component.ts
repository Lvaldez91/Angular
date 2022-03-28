import { Component, OnInit } from '@angular/core';
import { HeroeServices } from '../../services/heroes.services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  ArrHeroes: any[] = [];
  filterPost = '';
  isChecked = false;
  constructor(private _HeroeServices: HeroeServices, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.ArrHeroes = this._HeroeServices.getHeroes();
    console.log(this.ArrHeroes);
  }

  fnCheckItem(item){
    console.log(this.ArrHeroes);
    if (this.isChecked === true)
    {
    this.isChecked = false;
    }
    else
    {
    this.isChecked = true;
    }
  }

}

/// test

// import {Pipe, PipeTransform} from '@angular/core';

// @Pipe({
//     name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//     transform(items: any, filter: any, isAnd: boolean): any {
//         if (filter && Array.isArray(items)) {
//             const filterKeys = Object.keys(filter);
//             if (isAnd) {
//                 return items.filter(item =>
//                     filterKeys.reduce((memo, keyName) =>
//                         (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
//             } else {
//                 return items.filter(item => {
//                     return filterKeys.some((keyName) => {
//                         if (filter[keyName]) {
//                             const fil = filter[keyName].split(' ');
//                             let check = false;
//                             for (const f of fil) {
//                                 if (new RegExp(f, 'gi').test(item[keyName]) || f === '') {
//                                     check = true;
//                                 } else {
//                                     check = false;
//                                     break;
//                                 }
//                             }
//                             return check;
//                         } else {
//                             return true;
//                         }
//                     });
//                 });
//             }
//         } else {
//             return items;
//         }
//     }
// }