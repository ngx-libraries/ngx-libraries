import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export function provideNGXLibraryInfrastructure(): EnvironmentProviders {
  return makeEnvironmentProviders([]);
}
