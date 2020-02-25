import { TestBed } from '@angular/core/testing';

import { GitlabApiAuthInterceptorService } from './gitlab-api-auth-interceptor.service';
import { GitlabApiAuthStoreService } from './gitlab-api-auth-store.service';

describe('GitlabApiAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GitlabApiAuthStoreService,
      GitlabApiAuthInterceptorService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(GitlabApiAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
