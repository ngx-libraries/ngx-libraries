import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { ZIP_WORKER_SCRIPTS_PATH, ZipService } from './zip.service';

export function provideNGXLibraryZipJs(path: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ZIP_WORKER_SCRIPTS_PATH,
      useValue: path
    },
    ZipService
  ]);
}
