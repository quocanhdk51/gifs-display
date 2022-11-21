import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  public readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
