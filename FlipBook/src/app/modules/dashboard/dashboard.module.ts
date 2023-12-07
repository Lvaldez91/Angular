import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Informe1Component } from './pages/informe-1/informe-1.component';
import { Informe2Component } from './pages/informe-2/informe-2.component';
import { Informe0Component } from './pages/informe-0/informe-0.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortadainicialComponent } from './pages/expediente/portadainicial/portadainicial.component';
import { PortadacjfComponent } from './pages/expediente/portadacjf/portadacjf.component';
import { IndiceComponent } from './pages/expediente/indice/indice.component';
import { CuadernilloOrientacionComponent } from './pages/informes/cuadernillo-orientacion/cuadernillo-orientacion.component';
import { DiligenciaLlamadaComponent } from './pages/informes/diligencia-llamada/diligencia-llamada.component';
import { AcompanamientoPsicoComponent } from './pages/informes/acompanamiento-psico/acompanamiento-psico.component';
import { FormularioAtencionComponent } from './pages/informes/formulario-atencion/formulario-atencion.component';
import { InfoSesionComponent } from './pages/informes/info-sesion/info-sesion.component';
import { LlamadaOrientacionComponent } from './pages/informes/llamada-orientacion/llamada-orientacion.component';
import { SeguimientoCorreoComponent } from './pages/correo/seguimiento-correo/seguimiento-correo.component';


@NgModule({
    declarations: [
        HomeComponent,
        Informe1Component,
        Informe2Component,
        Informe0Component,
        PortadainicialComponent,
        PortadacjfComponent,
        IndiceComponent,
        CuadernilloOrientacionComponent,
        DiligenciaLlamadaComponent,
        AcompanamientoPsicoComponent,
        FormularioAtencionComponent,
        InfoSesionComponent,
        LlamadaOrientacionComponent,
        SeguimientoCorreoComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule
    ]
})
export class DashboardModule { }
