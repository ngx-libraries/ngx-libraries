import { TestBed } from '@angular/core/testing';

import { GitlabApiAuthStoreService } from './gitlab-api-auth-store.service';

describe('GitlabApiAuthStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GitlabApiAuthStoreService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(GitlabApiAuthStoreService);
    expect(service)
      .toBeTruthy();
  });
});
