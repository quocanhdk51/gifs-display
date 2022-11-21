import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gif-expansion',
  templateUrl: './gif-expansion.component.html',
  styleUrls: ['./gif-expansion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifExpansionComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly src: string,
  ) { }

  ngOnInit(): void {
  }

}
