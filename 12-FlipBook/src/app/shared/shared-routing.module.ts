import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazineComponent } from './layout/magazine/magazine.component';
import { BookComponent } from '../pages/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: MagazineComponent,
    children: [{ path: 'book', component: BookComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
