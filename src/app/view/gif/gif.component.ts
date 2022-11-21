import { LoadingService } from './../../shared/loading/loading.service';
import { GIFObject } from './../../shared/network/giphy/giphy.model';
import { GiphyService } from './../../shared/network/giphy/giphy.service';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetIDRequestParams } from 'src/app/shared/network/giphy/giphy.model';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifComponent implements OnInit {
  private readonly _id$: Observable<string> = this._activatedRoute.params.pipe(map((params) => params.id));

  public readonly gifObject$: Observable<GIFObject> = this._id$.pipe(
    tap(() => this._loadingService.loading$.next(true)),
    switchMap(
      (id) => this._giphyService.getGifById(id, new GetIDRequestParams()).pipe(
        map((response) => response.data),
        catchError(
          (err) => throwError(err).pipe(
            tap(() => this._router.navigate(['/home']))
          )
        ),
        finalize(() => this._loadingService.loading$.next(false))
      )
    )
  );
  public readonly imageFocused$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _giphyService: GiphyService,
    private _loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

  public get randomBackgroundColor(): string {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  public toggleImageFocus(): void {
    this.imageFocused$.next(!this.imageFocused$.value);
  }
}
