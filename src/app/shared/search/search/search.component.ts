import { tap, switchMap, startWith, filter, take, distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searching: EventEmitter<string> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  public readonly form: FormGroup = this._formBuilder.group({
    search: ['']
  });

  private readonly _formSubmit$: Subject<void> = new Subject();
  private readonly _destroy$: Subject<void> = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this._emitSearching();
    this._subscribeFormSubmit();
  }

  private _subscribeFormSubmit(): void {
    this._formSubmit$.pipe(
      takeUntil(this._destroy$),
      tap(() => this.form.markAllAsTouched()),
      switchMap(() => this.form.statusChanges.pipe(
        startWith(this.form.status),
        filter((status) => status !== 'PENDING'),
        take(1)
      )),
      filter((status) => status === 'VALID')
    ).subscribe(() => this.submit.emit(this.form.value));
  }

  private _emitSearching(): void {
    this.form.get('search').valueChanges.pipe(
      takeUntil(this._destroy$),
      distinctUntilChanged(),
      debounceTime(300),
    ).subscribe(
      (searchValue) => this.searching.emit(searchValue)
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
