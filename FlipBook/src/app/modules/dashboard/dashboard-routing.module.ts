import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { IndiceComponent } from './pages/expediente/indice/indice.component';
import { PortadacjfComponent } from './pages/expediente/portadacjf/portadacjf.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {path:'expediente', component:HomeComponent, title:'Expediente'},
      {path:'indice', component:IndiceComponent, title:'Indice'},
      {path:'portadaCjf', component:PortadacjfComponent, title:'Portada de CJF'},
      {path:'cuadernillo', component:PortadacjfComponent, title:'Cuadernillo de Orientación'},
      {path:'diligencia', component:PortadacjfComponent, title:'Diligencia de Llamada'},
      {path:'formulario', component:PortadacjfComponent, title:'Formulario de Atención'},
      {path:'informe', component:PortadacjfComponent, title:'Informe de Sesión'},
      {path:'**', redirectTo:'expediente'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
