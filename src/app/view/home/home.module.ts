import { EmptyPlaceholderModule } from './../../shared/empty-placeholder/empty-placeholder.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchModule } from './../../shared/search/search.module';
import { CardModule } from '../../shared/card/card.module';
import { NetworkModule } from '../../shared/network/network.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NetworkModule,
    CardModule,
    SearchModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    EmptyPlaceholderModule,
  ]
})
export class HomeModule { }
