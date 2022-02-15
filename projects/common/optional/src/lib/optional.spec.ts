import { Optional } from './optional';

/* eslint-disable no-null/no-null */
describe('Optional', () => {
  function isNotValue(value): boolean {
    return value === undefined || value === null;
  }

  Object.entries({
    defined: { internalValue: {} },
    undefined: undefined,
    null: null
  })
    .map(([ key, value ]) => ({ key, value, optional: Optional.of(value) }))
    .forEach(({key, value, optional}) => {
      it(`should have Optional<${key}>.get() method with ${key} value`, () => {
        expect(optional.get()).toEqual(value);
      });

      it(`should have Optional<${key}>.orElse() method with ${key} value`, () => {
        expect(optional.orElse({ defaultValue: 'defaultValue' }))
          .toEqual(isNotValue(value) ? { defaultValue: 'defaultValue' } : value);
      });

      it(`should have Optional<${key}>.orElseGet() method with ${key} value`, () => {
        expect(optional.orElseGet(() => ({ defaultValue: 'defaultValue' })))
          .toEqual(isNotValue(value) ? { defaultValue: 'defaultValue' } : value);
      });

      it(`should have Optional<${key}>.ifPresent() method with ${key} value`, () => {
        const spy = jasmine.createSpy('Optional.callback');

        optional.ifPresent(spy);

        if (isNotValue(value)) {
          expect(spy).not.toHaveBeenCalled();
        } else {
          expect(spy).toHaveBeenCalledWith(value);
        }
      });

      it(`should have Optional<${key}>.isPresent() method with ${key} value`, () => {
        expect(optional.isPresent()).toEqual(!isNotValue(value));
      });

      it(`should have Optional<${key}>.flatMap() method with ${key} value`, () => {
        const mapperResult = { mapperResult: 'mapper-result' };

        const spy = jasmine.createSpy('Optional.mapper').and.returnValue(Optional.of(mapperResult));

        const flatMapOptional = optional.flatMap(spy);

        if (isNotValue(value)) {
          expect(spy).not.toHaveBeenCalled();
          expect(flatMapOptional).toEqual(Optional.empty());
        } else {
          expect(spy).toHaveBeenCalledWith(value);
          expect(flatMapOptional.get()).toEqual(mapperResult);
        }
      });

      it(`should have Optional<${key}>.map() method with ${key} value`, () => {
        const mapperResult = { mapperResult: 'mapper-result' };

        const spy = jasmine.createSpy('Optional.mapper').and.returnValue(mapperResult);

        const mapOptional = optional.map(spy);

        if (isNotValue(value)) {
          expect(spy).not.toHaveBeenCalled();
          expect(mapOptional).toEqual(Optional.empty());
        } else {
          expect(spy).toHaveBeenCalledWith(value);
          expect(mapOptional.get()).toEqual(mapperResult);
        }
      });

      [true, false]
        .forEach((filterResult) => {
          it(`should have Optional<${key}>.filter() method with ${key} value and ${filterResult} condition`, () => {
            const spy = jasmine.createSpy('Optional.condition').and.returnValue(filterResult);

            const filterOptional = optional.filter(spy);

            if (isNotValue(value)) {
              expect(spy).not.toHaveBeenCalled();
              expect(filterOptional).toEqual(Optional.empty());
            } else {
              expect(spy).toHaveBeenCalledWith(value);
              expect(filterOptional.get()).toEqual(filterResult ? value : undefined);
            }
          });
        });
    });
});
