import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{}
