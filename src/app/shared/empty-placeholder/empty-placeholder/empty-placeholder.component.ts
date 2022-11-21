import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-placeholder',
  templateUrl: './empty-placeholder.component.html',
  styleUrls: ['./empty-placeholder.component.scss']
})
export class EmptyPlaceholderComponent implements OnInit {
  @Input() icon: string = 'folder_off';
  @Input() text: string = 'No files to show';

  constructor() { }

  ngOnInit(): void {
  }
}
