import { TestBed } from '@angular/core/testing';

import { MarkdownlintOptionsService } from './markdownlint-options.service';

describe('MarkdownlintOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.inject(MarkdownlintOptionsService);
    expect(service)
      .toBeTruthy();
  });
});
