import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PdfmakeComponent } from './components/pdfmake/pdfmake.component';
import { ModalComponent } from './components/modal/modal.component';
import { AHomeComponent } from './pages/a-home/a-home.component';
import { BInformeComponent } from './pages/b-informe/b-informe.component';
import { CInformeComponent } from './pages/c-informe/c-informe.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfmakeComponent,
    ModalComponent,
    AHomeComponent,
    BInformeComponent,
    CInformeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
