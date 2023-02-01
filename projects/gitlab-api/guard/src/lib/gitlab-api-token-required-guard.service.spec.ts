import { TestBed } from '@angular/core/testing';
import { GitlabApiAuthStoreService } from '@ngx-library/gitlab-api';

import { GitlabApiTokenRequiredGuard } from './gitlab-api-token-required-guard.service';

describe('GitlabApiTokenRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GitlabApiAuthStoreService,
        GitlabApiTokenRequiredGuard
      ]
    });
  });

  it('should create', () => {
    const guard = TestBed.inject(GitlabApiTokenRequiredGuard);

    expect(guard)
      .toBeTruthy();
  });
});
