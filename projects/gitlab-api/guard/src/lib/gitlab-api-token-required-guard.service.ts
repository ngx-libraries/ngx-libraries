import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { GitlabApiAuthStoreService } from '@ngx-library/gitlab-api';
import { race, timer } from 'rxjs';
import { defaultIfEmpty, first, map } from 'rxjs/operators';

export const gitlabApiTokenRequiredGuard: CanActivateFn | CanActivateChildFn = () => {
  const gitlabApiAuthStoreService = inject(GitlabApiAuthStoreService);

  return race(gitlabApiAuthStoreService.auth, timer(500))
    .pipe(
      first(),
      map((arg) => typeof arg === 'number'
        ? arg !== 0
        : arg !== undefined),
      defaultIfEmpty(false)
    );
};
