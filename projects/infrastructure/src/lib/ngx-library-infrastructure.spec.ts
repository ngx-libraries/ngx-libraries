import { provideNGXLibraryInfrastructure } from './ngx-library-infrastructure';

describe('NGXLibraryInfrastructure', () => {
  it('should provideNGXLibraryInfrastructure', () => {
    expect(provideNGXLibraryInfrastructure())
      .toBeTruthy();
  });
});
