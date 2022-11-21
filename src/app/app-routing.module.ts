import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'gif',
    loadChildren: () => import('./view/gif/gif.module').then(m => m.GifModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'my-gifs', loadChildren: () => import('./view/local-gifs/local-gifs.module').then(m => m.LocalGifsModule) },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
