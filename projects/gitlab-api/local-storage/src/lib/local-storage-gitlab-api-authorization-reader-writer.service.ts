import { Injectable } from '@angular/core';
import {
  GitlabApiAuth,
  GitlabApiAuthorizationReader,
  GitlabApiAuthorizationWriter,
  GitlabApiAuthType
} from '@ngx-library/gitlab-api';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class LocalStorageGitlabApiAuthorizationReaderWriterService implements GitlabApiAuthorizationReader, GitlabApiAuthorizationWriter {

  private readonly _field = 'gitlabApiAuth';

  constructor(
    private readonly _storage: StorageMap
  ) {
  }

  public readToken(): Observable<GitlabApiAuth> {
    return this._storage.get(this._field)
      .pipe(
        filter<GitlabApiAuth>((auth) => auth !== undefined && auth.type !== undefined && auth.token !== undefined),
        map((auth) => new GitlabApiAuth(auth.type, auth.token))
      );
  }

  public writeToken(type: GitlabApiAuthType, token: string): Observable<GitlabApiAuth> {
    return this._storage
      .set(this._field, { type, token })
      .pipe(
        map(() => new GitlabApiAuth(type, token))
      );
  }
}
