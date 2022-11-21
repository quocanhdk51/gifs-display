import { GifExpansionComponent } from './gif-expansion/gif-expansion.component';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface CardInput {
  imageSrc: string,
  title: string
}

@Component({
  selector: 'app-local-gifs',
  templateUrl: './local-gifs.component.html',
  styleUrls: ['./local-gifs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalGifsComponent implements OnInit {
  private readonly _files$: BehaviorSubject<File[]> = new BehaviorSubject([]);

  public readonly cardInputs$: Observable<CardInput[]> = this._files$.asObservable().pipe(
    map(
      (files) => files.map((file) => ({
        imageSrc: URL.createObjectURL(file),
        title: file.name
      }))
    )
  );

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  public onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.handleFileSelected(target.files);
  }

  public handleFileSelected(files: FileList): void {
    const newFiles: File[] = [
      ...this._files$.value,
      ...Array.from(files)
    ];

    this._files$.next(newFiles);
  }

  public expandImage(imageSrc: string): void {
    this._dialog.open(
      GifExpansionComponent,
      {
        data: imageSrc,
        panelClass: 'gif-expand-dialog-container'
      }
    );
  }
}
