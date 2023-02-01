import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GitlabApiAuth, GitlabApiAuthorizationReader, GitlabApiAuthorizationWriter, GitlabApiAuthType } from './models/auth.model';

export const GITLAB_API_READ_AUTHORIZATION = new InjectionToken<GitlabApiAuthorizationReader>(
  '[@ngx-library/gitlab-api] GITLAB_API_READ_AUTHORIZATION',
  {
    providedIn: 'root',
    factory: () => ({
      readToken: () => new Observable((subscriber) => {
        subscriber.next(undefined);
        subscriber.complete();
      })
    })
  }
);

export const GITLAB_API_WRITE_AUTHORIZATION = new InjectionToken<GitlabApiAuthorizationWriter>(
  '[@ngx-library/gitlab-api] GITLAB_API_WRITE_AUTHORIZATION',
  {
    providedIn: 'root',
    factory: () => ({
      writeToken: (type: GitlabApiAuthType, token: string) => of(new GitlabApiAuth(type, token))
    })
  }
);
