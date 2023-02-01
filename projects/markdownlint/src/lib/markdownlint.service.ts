import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { MarkdownlintOptionsService } from './markdownlint-options.service';
import { MarkdownlintResult } from './models/markdownlint-result.model';

declare const markdownlint: any;

@Injectable({
  providedIn: 'root'
})
export class MarkdownlintService {

  constructor(
    private readonly _markdownlintOptionsService: MarkdownlintOptionsService
  ) { }

  public lint(content: any): Observable<MarkdownlintResult[]> {
    return this._markdownlintOptionsService.options
      .pipe(
        first(),
        switchMap((options) => new Observable<MarkdownlintResult[]>((subscriber) => {
          markdownlint({
            ...options,
            strings: {
              content
            }
          }, (err: any, result: any) => {
            if (!err) {
              subscriber.next(result.content);
              subscriber.complete();
            } else {
              subscriber.error(result);
            }
          });
        }))
      );
  }
}
