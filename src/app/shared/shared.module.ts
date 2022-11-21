import { EmptyPlaceholderModule } from './empty-placeholder/empty-placeholder.module';
import { LoadingModule } from './loading/loading.module';
import { NetworkModule } from './network/network.module';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    NetworkModule,
    LoadingModule,
    EmptyPlaceholderModule,
  ]
})
export class SharedModule { }
