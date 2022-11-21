import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-focus',
  templateUrl: './card-focus.component.html',
  styleUrls: ['./card-focus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFocusComponent implements OnInit {
  @ViewChild('root') rootTemplate: TemplateRef<any>;

  @Input() public ngStyle: { [kclass: string]: any; } = {};
  @Input() public ngClass: string | string[] | Set<string> | { [klass: string]: any; } = '';

  constructor() { }

  ngOnInit(): void {
  }

}
