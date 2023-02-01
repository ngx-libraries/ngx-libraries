import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GitlabApiAuthStoreService } from './gitlab-api-auth-store.service';
import { GitlabApiService, GITLAB_API_BASE_PATH } from './gitlab-api.service';

describe('GitlabApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      {
        provide: GITLAB_API_BASE_PATH,
        useValue: '/gitlab/api/base/path'
      },
      GitlabApiService,
      GitlabApiAuthStoreService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(GitlabApiService);
    expect(service)
      .toBeTruthy();
  });
});
