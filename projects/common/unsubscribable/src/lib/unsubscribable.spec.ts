import { ChangeDetectionStrategy, Component, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Unsubscribable } from './unsubscribable';

@Component({
  selector: 'lib-test-unsubscribable',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestUnsubscribableComponent extends Unsubscribable {
  public destroy = this._destroy.asObservable();

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}

@Injectable()
class TestUnsubscribableService extends Unsubscribable {
  public destroy = this._destroy.asObservable();

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}

describe('Unsubscribable', () => {

  beforeEach(() =>
    TestBed
      .configureTestingModule({
        declarations: [TestUnsubscribableComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          TestUnsubscribableService
        ]
      })
      .compileComponents()
  );

  it('should destroy component and complete observable', () => {
    const fixture = TestBed.createComponent(TestUnsubscribableComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    const successSpy = jasmine.createSpy('Destroy Success');
    const errorSpy = jasmine.createSpy('Destroy Error');
    const completeSpy = jasmine.createSpy('Destroy Complete');

    component
      .destroy
      .subscribe(successSpy, errorSpy, completeSpy);

    fixture.destroy();

    expect(successSpy).toHaveBeenCalledWith(undefined);
    expect(errorSpy).not.toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalledWith();
  });

  it('should destroy service and complete observable', () => {
    const service = TestBed.inject(TestUnsubscribableService);

    const successSpy = jasmine.createSpy('Destroy Success');
    const errorSpy = jasmine.createSpy('Destroy Error');
    const completeSpy = jasmine.createSpy('Destroy Complete');

    service
      .destroy
      .subscribe(successSpy, errorSpy, completeSpy);

    // eslint-disable-next-line @angular-eslint/no-lifecycle-call
    service.ngOnDestroy();

    expect(successSpy).toHaveBeenCalledWith(undefined);
    expect(errorSpy).not.toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalledWith();
  });
});
