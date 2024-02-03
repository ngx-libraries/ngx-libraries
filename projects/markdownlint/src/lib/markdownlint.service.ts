import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { MarkdownlintOptionsService } from './markdownlint-options.service';
import { MarkdownlintResult } from './models/markdownlint-result.model';

declare const markdownlint: any;

@Injectable({
  providedIn: 'root'
})
export class MarkdownlintService {
  private readonly _markdownlintOptionsService = inject(MarkdownlintOptionsService);

  public lint(content: any): Observable<MarkdownlintResult[]> {
    return this._markdownlintOptionsService.options
      .pipe(
        first(),
        switchMap((options) => new Observable<MarkdownlintResult[]>((subscriber) => {
          const result = markdownlint.library.sync({
            ...options,
            strings: {
              content
            }
          });

          subscriber.next(result.content);
          subscriber.complete();
        }))
      );
  }
}
