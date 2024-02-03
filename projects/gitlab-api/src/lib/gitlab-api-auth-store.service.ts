import { inject, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { GITLAB_API_READ_AUTHORIZATION, GITLAB_API_WRITE_AUTHORIZATION } from './gitlab-api-auth.token';
import { GitlabApiAuth, GitlabApiAuthType } from './models/auth.model';

@Injectable()
export class GitlabApiAuthStoreService {
  public readonly auth: Observable<GitlabApiAuth>;

  protected readonly _auth: ReplaySubject<GitlabApiAuth>;

  private readonly _reader = inject(GITLAB_API_READ_AUTHORIZATION);
  private readonly _writer = inject(GITLAB_API_WRITE_AUTHORIZATION);

  constructor() {
    this._auth = new ReplaySubject<GitlabApiAuth>(1);
    this.auth = this._auth.asObservable();

    this._reader.readToken()
      .pipe(first())
      .subscribe((auth) => {
        this._auth.next(auth);
      });
  }

  public setToken(type: GitlabApiAuthType, token: string): Observable<GitlabApiAuth> {
    return this._writer.writeToken(type, token)
      .pipe(
        first(),
        tap((auth) => {
          this._auth.next(auth);
        })
      );
  }
}
