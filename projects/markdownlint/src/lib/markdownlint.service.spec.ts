import { TestBed } from '@angular/core/testing';

import { MarkdownlintService } from './markdownlint.service';

describe('MarkdownlintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.inject(MarkdownlintService);
    expect(service)
      .toBeTruthy();
  });
});
