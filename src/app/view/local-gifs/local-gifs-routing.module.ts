import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalGifsComponent } from './local-gifs.component';

const routes: Routes = [{ path: '', component: LocalGifsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalGifsRoutingModule { }
