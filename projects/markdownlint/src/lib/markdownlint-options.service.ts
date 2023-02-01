import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { MarkdownlintOptions } from './models/markdownlint-options.model';

@Injectable({
  providedIn: 'root'
})
export class MarkdownlintOptionsService {
  public readonly options: Observable<MarkdownlintOptions>;
  private readonly _options: ReplaySubject<MarkdownlintOptions>;

  constructor() {
    this._options = new ReplaySubject(1);
    this.options = this._options.asObservable();
  }

  public setOptions(options: MarkdownlintOptions): void {
    this._options.next(options);
  }
}
