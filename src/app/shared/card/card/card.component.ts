import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  // @Input() public routerLink: any[] | string | null | undefined;
  @Input() public imgSrc: string;
  @Input() public title: string;


  @Output() public click: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public get randomBackgroundColor(): string {
    // return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return '';
  }

  public onClick(event: Event): void {
    this.click.emit();
    event.stopPropagation();
  }
}
