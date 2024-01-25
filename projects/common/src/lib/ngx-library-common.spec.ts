import { provideNGXLibraryCommon } from './ngx-library-common';

describe('NGXLibraryCommon', () => {
  it('should provideNGXLibraryCommon', () => {
    expect(provideNGXLibraryCommon())
      .toBeTruthy();
  });
});
