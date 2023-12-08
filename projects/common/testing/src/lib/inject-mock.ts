import { AbstractType, InjectionToken, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Optional } from '@ngx-library/common/optional';
import { Observable, Subject } from 'rxjs';

export function injectMock<T, C = unknown>(
  token: Type<T> | InjectionToken<T> | AbstractType<T>,
  fixture?: ComponentFixture<C>
): jasmine.SpyObj<T> {
  return Optional.of(fixture)
    .map(({ debugElement }) => debugElement.injector.get(token) as jasmine.SpyObj<T>)
    .orElseGet(() => TestBed.inject(token) as jasmine.SpyObj<T>);
}

export function asSubject<T>(observable: Observable<T>): Subject<T> {
  return observable as Subject<T>;
}
