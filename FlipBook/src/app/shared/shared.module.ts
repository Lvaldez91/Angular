import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderinformeComponent } from './headerinforme/headerinforme.component';
import { ModalComponent } from './modal/modal.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderinformeComponent,
    ModalComponent,
    PdfmakeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderinformeComponent,
    ModalComponent
  ]
})
export class SharedModule { }
