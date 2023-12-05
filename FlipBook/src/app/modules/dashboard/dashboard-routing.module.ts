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
      {path:'Expediente', component:HomeComponent},
      {path:'indice', component:IndiceComponent},
      {path:'portadacjf', component:PortadacjfComponent},
      {path:'cuadernillo', component:PortadacjfComponent},
      {path:'**', redirectTo:'Expediente'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
