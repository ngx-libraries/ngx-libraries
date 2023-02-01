import { HttpResponse } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Pagination<T> {
  total?: number;
  totalPages?: number;
  perPage: number;
  page: number;
  nextPage: number;
  prevPage: number;
  content: T[];
}

export function getPaginationFromResponse<T>(response: HttpResponse<T[]>): Pagination<T> {
  const total = response.headers.get('X-Total');
  const totalPages = response.headers.get('X-Total-Pages');

  const page = response.headers.get('X-Page');
  const perPage = response.headers.get('X-Per-Page');
  const nextPage = response.headers.get('X-Next-Page');
  const prevPage = response.headers.get('X-Prev-Page');

  const content = response.body;

  return {
    total: Number(total),
    totalPages: Number(totalPages),
    page: Number(page),
    perPage: Number(perPage),
    nextPage: Number(nextPage),
    prevPage: Number(prevPage),
    content: content ?? []
  };
}

export function getAllPagesRecursive<T>(
  request: (page: number) => Observable<Pagination<T>>,
  page: number
): Observable<Pagination<T>[]> {
  return request(page)
    .pipe(
      switchMap((response) => {
        const requests = [
          of([
            response
          ])
        ];

        if (response.nextPage !== 0) {
          requests.push(getAllPagesRecursive(request, response.nextPage));
        }

        return forkJoin(requests);
      }),
      map((responses) => responses.length > 1
        ? [
          ...responses[0], ...responses[1]
        ]
        : [
          ...responses[0]
        ])
    );
}

export function getAllPages<T>(
  request: (page: number) => Observable<Pagination<T>>
): Observable<Pagination<T>[]> {
  return getAllPagesRecursive<T>(request, 1);
}
