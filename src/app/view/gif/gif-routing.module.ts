import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif.component';

const routes: Routes = [
  {
    path: ':id',
    component: GifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifRoutingModule { }
