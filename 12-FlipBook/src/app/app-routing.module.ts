import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'magazine',
    loadChildren:() => import('./shared/shared.module').then((x)=> x.SharedModule)
  },
  {
    path:'**',
    redirectTo:'magazine'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
