import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  public readonly loading$: Observable<boolean> = this._loadingService.loading$.asObservable();

  constructor(
    private _loadingService: LoadingService,
  ) { }
}
