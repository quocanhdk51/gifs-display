import { CardFocusDirective } from './card-focus/card-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardFocusComponent } from './card-focus/card-focus.component';
import { SafeResourceUrlModule } from '../safe-resource-url/safe-resource-url.module';

@NgModule({
  declarations: [
    CardComponent,
    CardFocusComponent,
    CardFocusDirective,
  ],
  imports: [
    CommonModule,
    SafeResourceUrlModule,
  ],
  exports: [
    CardFocusComponent,
    CardComponent,
    CardFocusDirective,
  ]
})
export class CardModule { }
