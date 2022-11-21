import { CardFocusComponent } from './card-focus.component';
import { Directive, Input } from '@angular/core';
import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appCardFocus]'
})
export class CardFocusDirective {
  @Input() public appCardFocus: CardFocusComponent;

  private _overlayRef: OverlayRef;
  private _destroying$: Subject<void> = new Subject();

  constructor() { }

}
