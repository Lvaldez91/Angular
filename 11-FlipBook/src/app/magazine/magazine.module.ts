import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PageoneComponent } from './pages/pageone/pageone.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    PageoneComponent
  ],
  imports: [
    CommonModule,
    MagazineRoutingModule
  ]
})
export class MagazineModule { }
