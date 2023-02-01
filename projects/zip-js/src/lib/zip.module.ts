import { ModuleWithProviders, NgModule } from '@angular/core';

import { ZipService, ZIP_WORKER_SCRIPTS_PATH } from './zip.service';

@NgModule({})
export class ZipModule {
  public static forRoot(path: string): ModuleWithProviders<ZipModule> {
    return {
      ngModule: ZipModule,
      providers: [
        {
          provide: ZIP_WORKER_SCRIPTS_PATH,
          useValue: path
        },
        ZipService
      ]
    };
  }
}
