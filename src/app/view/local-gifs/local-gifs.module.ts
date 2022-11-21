import { GifExpansionComponent } from './gif-expansion/gif-expansion.component';
import { SafeResourceUrlModule } from './../../shared/safe-resource-url/safe-resource-url.module';
import { DragAndDropModule } from './../../shared/drag-and-drop/drag-and-drop.module';
import { CardModule } from './../../shared/card/card.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmptyPlaceholderModule } from './../../shared/empty-placeholder/empty-placeholder.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalGifsRoutingModule } from './local-gifs-routing.module';
import { LocalGifsComponent } from './local-gifs.component';


@NgModule({
  declarations: [
    LocalGifsComponent,
    GifExpansionComponent
  ],
  imports: [
    CommonModule,
    LocalGifsRoutingModule,
    EmptyPlaceholderModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CardModule,
    DragAndDropModule,
    MatDialogModule,
    SafeResourceUrlModule,
  ]
})
export class LocalGifsModule { }
