import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './magazine/shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'magazine',
    component: LayoutComponent
  },
  {
    path: 'magazine',
    loadChildren:() => import('./magazine/magazine.module').then((x)=> x.MagazineModule)
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
