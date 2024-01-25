import { EnvironmentProviders, makeEnvironmentProviders, Type } from '@angular/core';

import { GitlabApiAuthStoreService } from './gitlab-api-auth-store.service';
import { GITLAB_API_READ_AUTHORIZATION, GITLAB_API_WRITE_AUTHORIZATION } from './gitlab-api-auth.token';
import { GITLAB_API_BASE_PATH, GitlabApiService } from './gitlab-api.service';
import { GitlabApiAuthorizationReader, GitlabApiAuthorizationWriter } from './models/auth.model';

export function provideNGXLibraryGitlabApi<
  TAuthReader extends GitlabApiAuthorizationReader,
  TAuthWriter extends GitlabApiAuthorizationWriter
>(
  config: {
    authorizationReader: Type<TAuthReader>;
    authorizationWriter: Type<TAuthWriter>;
    basePath?: string;
  }
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: GITLAB_API_BASE_PATH,
      useValue: config?.basePath ?? '/api/v4'
    },
    {
      provide: GITLAB_API_READ_AUTHORIZATION,
      useClass: config.authorizationReader
    },
    {
      provide: GITLAB_API_WRITE_AUTHORIZATION,
      useClass: config.authorizationWriter
    },
    GitlabApiAuthStoreService,
    GitlabApiService
  ]);
}
