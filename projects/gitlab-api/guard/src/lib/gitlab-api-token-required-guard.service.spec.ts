import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { asSubject, injectMock } from '@ngx-library/common/testing';
import { GitlabApiAuthStoreService } from '@ngx-library/gitlab-api';
import { Observable, ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { GitlabApiAuth, GitlabApiAuthType } from '../../../src/lib/models/auth.model';

import { gitlabApiTokenRequiredGuard } from './gitlab-api-token-required-guard.service';

describe('GitlabApiTokenRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GitlabApiAuthStoreService,
          useValue: jasmine.createSpyObj('GitlabApiAuthStoreService', [], {
            auth: new ReplaySubject(1)
          })
        }
      ]
    });
  });

  it('should gitlabApiTokenRequiredGuard', () => {
    TestBed.runInInjectionContext(() => {
      const spy = jasmine.createSpy('GitlabApiTokenRequiredGuard');
      const { auth } = injectMock(GitlabApiAuthStoreService);

      asSubject(auth)
        .next(new GitlabApiAuth(GitlabApiAuthType.O_AUTH_2, 'fakeToken'));

      (gitlabApiTokenRequiredGuard(
        {} as unknown as ActivatedRouteSnapshot,
        {} as unknown as RouterStateSnapshot
      ) as Observable<boolean | UrlTree>)
        .pipe(first())
        .subscribe(spy);

      expect(spy)
        .toHaveBeenCalledWith(true);
    });
  });

  it('should gitlabApiTokenRequiredGuard with timer', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      const spy = jasmine.createSpy('GitlabApiTokenRequiredGuard');

      (gitlabApiTokenRequiredGuard(
        {} as unknown as ActivatedRouteSnapshot,
        {} as unknown as RouterStateSnapshot
      ) as Observable<boolean | UrlTree>)
        .pipe(first())
        .subscribe(spy);

      tick(1000);

      expect(spy)
        .toHaveBeenCalledWith(false);
    });
  }));
});
