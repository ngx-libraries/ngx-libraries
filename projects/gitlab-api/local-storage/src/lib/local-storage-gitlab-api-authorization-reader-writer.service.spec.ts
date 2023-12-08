import { TestBed } from '@angular/core/testing';

import { LocalStorageGitlabApiAuthorizationReaderWriterService } from './local-storage-gitlab-api-authorization-reader-writer.service';

describe('LocalStorageGitlabApiAuthorizationReaderWriterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageGitlabApiAuthorizationReaderWriterService
      ]
    });
  });

  it('should create', () => {
    const service = TestBed.inject(LocalStorageGitlabApiAuthorizationReaderWriterService);

    expect(service)
      .toBeTruthy();
  });
});
