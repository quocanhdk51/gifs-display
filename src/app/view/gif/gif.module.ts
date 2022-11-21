import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NetworkModule } from './../../shared/network/network.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifRoutingModule } from './gif-routing.module';
import { GifComponent } from './gif.component';


@NgModule({
  declarations: [
    GifComponent
  ],
  imports: [
    CommonModule,
    GifRoutingModule,
    NetworkModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GifModule { }
