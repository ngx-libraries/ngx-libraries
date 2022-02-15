import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ZipEntry } from './models/zip-entry.model';
import { ZipTaskProgress } from './models/zip-task-progress.model';
import { ZipTask } from './models/zip-task.model';

declare const zip: any;

export const ZIP_WORKER_SCRIPTS_PATH = new InjectionToken<string>('ZIP_WORKER_SCRIPTS_PATH');

@Injectable()
export class ZipService {
  constructor(
    @Inject(ZIP_WORKER_SCRIPTS_PATH) private readonly _workerScriptsPath: string
  ) {
    zip.workerScriptsPath = this._workerScriptsPath;
  }

  private static getData<T>(writer, entry: ZipEntry): ZipTask<T> {
    const progress = new Subject<ZipTaskProgress>();

    const data = new Observable<T>((subscriber) => {
      (entry as any).getData(
        writer,
        (blob) => {
          subscriber.next(blob);
          subscriber.complete();
          progress.next(undefined);
        },
        (current, total) => {
          progress.next({ active: true, current, total });
        }
      );
    });

    return { progress, data };
  }

  public getEntries(file): Observable<Array<ZipEntry>> {
    return new Observable((subscriber) => {
      const reader = new zip.BlobReader(file);

      zip.createReader(
        reader,
        (zipReader) => zipReader.getEntries((entries) => {
          subscriber.next(entries);
          subscriber.complete();
        }),
        (message) => {
          subscriber.error({ message });
        }
      );
    });
  }

  public getBlobData(entry: ZipEntry): ZipTask {
    return ZipService.getData<Blob>(new zip.BlobWriter(), entry);
  }

  public getTextData(entry: ZipEntry): ZipTask<string> {
    return ZipService.getData<string>(new zip.TextWriter(), entry);
  }
}
