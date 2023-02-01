import { Optional } from './optional';

describe('Optional', () => {
  function isValue(value: any): value is { internalValue: {} } {
    return value !== undefined && value !== null;
  }
  Object.entries({
    defined: {
      internalValue: {}
    },
    undefined: undefined,
    null: null
  })
    .map(([
      key, value
    ]) => ({
      key,
      value,
      optional: Optional.of(value)
    }))
    .forEach(({ key, value, optional }) => {
      it(`should have Optional<${key}>.get() method with ${key} value`, () => {
        expect(optional.get())
          .toEqual(value);
      });

      it(`should have Optional<${key}>.orElse() method with ${key} value`, () => {
        if (isValue(value)) {
          expect(optional.orElse({
            defaultValue: 'defaultValue'
          }))
            .toEqual(value);
        } else {
          expect(optional.orElse({
            defaultValue: 'defaultValue'
          }))
            .toEqual({
              defaultValue: 'defaultValue'
            });
        }
      });

      it(`should have Optional<${key}>.orElseGet() method with ${key} value`, () => {
        if (isValue(value)) {
          expect(optional.orElseGet(() => ({
            defaultValue: 'defaultValue'
          })))
            .toEqual(value);
        } else {
          expect(optional.orElseGet(() => ({
            defaultValue: 'defaultValue'
          })))
            .toEqual({
              defaultValue: 'defaultValue'
            });
        }
      });

      it(`should have Optional<${key}>.ifPresent() method with ${key} value`, () => {
        const spy = jasmine.createSpy('Optional.callback');

        optional.ifPresent(spy);

        if (isValue(value)) {
          expect(spy)
            .toHaveBeenCalledWith(value);
        } else {
          expect(spy).not.toHaveBeenCalled();
        }
      });

      it(`should have Optional<${key}>.isPresent() method with ${key} value`, () => {
        expect(optional.isPresent())
          .toEqual(isValue(value));
      });

      it(`should have Optional<${key}>.flatMap() method with ${key} value`, () => {
        const mapperResult = {
          mapperResult: 'mapper-result'
        };

        const spy = jasmine.createSpy('Optional.mapper').and.returnValue(Optional.of(mapperResult));

        const flatMapOptional = optional.flatMap(spy);

        if (isValue(value)) {
          expect(spy)
            .toHaveBeenCalledWith(value);
          expect(flatMapOptional.get())
            .toEqual(mapperResult);
        } else {
          expect(spy).not.toHaveBeenCalled();
          expect(flatMapOptional)
            .toEqual(Optional.empty());
        }
      });

      it(`should have Optional<${key}>.map() method with ${key} value`, () => {
        const mapperResult = {
          mapperResult: 'mapper-result'
        };

        const spy = jasmine.createSpy('Optional.mapper').and.returnValue(mapperResult);

        const mapOptional = optional.map(spy);

        if (isValue(value)) {
          expect(spy)
            .toHaveBeenCalledWith(value);
          expect(mapOptional.get())
            .toEqual(mapperResult);
        } else {
          expect(spy).not.toHaveBeenCalled();
          expect(mapOptional)
            .toEqual(Optional.empty());
        }
      });

      [
        true, false
      ]
        .forEach((filterResult) => {
          it(`should have Optional<${key}>.filter() method with ${key} value and ${filterResult} condition`, () => {
            const spy = jasmine.createSpy('Optional.condition').and.returnValue(filterResult);

            const filterOptional = optional.filter(spy);

            if (isValue(value)) {
              expect(spy)
                .toHaveBeenCalledWith(value);
              expect(filterOptional.get())
                .toEqual(filterResult ? value : undefined);
            } else {
              expect(spy).not.toHaveBeenCalled();
              expect(filterOptional)
                .toEqual(Optional.empty());
            }
          });
        });
    });
});
