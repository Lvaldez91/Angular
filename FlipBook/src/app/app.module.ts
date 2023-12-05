import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import localEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SearchComponent } from './layout/search/search.component';
registerLocaleData(localEs,'es')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
