import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { MainComponent } from './layout/main/main.component';
import { MagazineComponent } from './layout/magazine/magazine.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './book/book.component';
import { OnepageComponent } from './pages/onepage/onepage.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    MainComponent,
    MagazineComponent,
    BookComponent,
    HomeComponent,
    DetalleComponent,
    OnepageComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
