import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(
    private readonly _sanitizer: DomSanitizer,
  ) {}

  public transform(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
