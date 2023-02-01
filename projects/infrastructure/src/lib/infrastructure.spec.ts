import { infrastructure } from './infrastructure';

describe('infrastructure', () => {
  it('should return nothing', () => {
    expect(infrastructure())
      .toBeUndefined();
  });
});
