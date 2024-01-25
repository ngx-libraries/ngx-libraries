import { provideNGXLibraryEslintConfig } from './ngx-library-eslint-config';

describe('NGXLibraryEslintConfig', () => {
  it('should provideNGXLibraryEslintConfig', () => {
    expect(provideNGXLibraryEslintConfig())
      .toBeTruthy();
  });
});
