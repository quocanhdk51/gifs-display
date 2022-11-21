import { SearchRequestParams } from './../../shared/network/giphy/giphy.model';
import { LoadingService } from './../../shared/loading/loading.service';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { GiphyService } from '../../shared/network/giphy/giphy.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { GIFObject, RequestParams } from '../../shared/network/giphy/giphy.model';

const GIF_OBJECT_TO_LOAD: number = 10;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _scrollEnd$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly _search$: BehaviorSubject<string> = new BehaviorSubject('');
  private readonly _dataStored$: BehaviorSubject<GIFObject[]> = new BehaviorSubject([]);
  private readonly _dataSrc$: Observable<GIFObject[]> = combineLatest([
    this._scrollEnd$,
    this._search$,
  ]).pipe(
    distinctUntilChanged(),
    debounceTime(1000),
    tap(() => this._loadingService.loading$.next(true)),
    switchMap(
      ([scrollEnd, search], index) => {
        const request = search
          ? new SearchRequestParams({
            q: search,
            limit: GIF_OBJECT_TO_LOAD,
            offset: this._dataStored$.value.length
          })
          : new RequestParams({
            limit: GIF_OBJECT_TO_LOAD,
            offset: this._dataStored$.value.length
          });

        if (scrollEnd) {
          request.offset += GIF_OBJECT_TO_LOAD;
        }

        const dataSrc$: Observable<GIFObject[]> = search
          ? this._giphyService.getGifsBySearchTerm(request as SearchRequestParams).pipe(map((res) => res.data))
          : this._giphyService.getTrendingGifs(request).pipe(map((res) => res.data));

        return !scrollEnd && !!index && !!this._dataStored$.value.length ? of([]) : dataSrc$
      }
    )
  );

  public readonly data$: Observable<GIFObject[]> = this._dataStored$.asObservable();

  private _destroy$: Subject<void> = new Subject();

  constructor(
    private _giphyService: GiphyService,
    private _loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this._dataSrc$.pipe(
      takeUntil(this._destroy$),
    ).subscribe(
      (data) => {
        this._loadingService.loading$.next(false);

        if (data.length === 0) {
          return;
        }

        const newDataStore = [
          ...this._dataStored$.value,
          ...data,
        ];

        this._dataStored$.next(newDataStore);
      }
    );
  }

  public onScroll(event: Event): void {
    const target = event.target as HTMLDivElement;
    this._scrollEnd$.next(target.offsetHeight + target.scrollTop >= target.scrollHeight);
  }

  public onSearch(searchValue: string): void {
    this._search$.next(searchValue);
    this._dataStored$.next([]);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
