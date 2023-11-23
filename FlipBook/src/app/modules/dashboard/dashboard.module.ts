import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Informe1Component } from './pages/informe-1/informe-1.component';
import { Informe2Component } from './pages/informe-2/informe-2.component';
import { Informe3Component } from './pages/informe-3/informe-3.component';
import { Informe4Component } from './pages/informe-4/informe-4.component';
import { Informe0Component } from './pages/informe-0/informe-0.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    Informe1Component,
    Informe2Component,
    Informe3Component,
    Informe4Component,
    Informe0Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
