import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { GitlabApiAuthStoreService } from '@ngx-library/gitlab-api';
import { Observable, race, timer } from 'rxjs';
import { defaultIfEmpty, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitlabApiTokenRequiredGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly _gitlabApiAuthService: GitlabApiAuthStoreService
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return race(this._gitlabApiAuthService.auth, timer(500))
      .pipe(
        first(),
        map((arg) => typeof arg === 'number'
          ? arg !== 0
          : arg !== undefined),
        defaultIfEmpty(false)
      );
  }
  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
