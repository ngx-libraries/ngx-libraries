import { eslintConfig } from './eslint-config';

describe('eslintConfig', () => {
  it('should return nothing', () => {
    expect(eslintConfig())
      .toBeUndefined();
  });
});
