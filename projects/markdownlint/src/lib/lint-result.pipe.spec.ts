import { LintResultPipe } from './lint-result.pipe';

describe('LintResultPipe', () => {
  it('create an instance', () => {
    const pipe = new LintResultPipe();
    expect(pipe)
      .toBeTruthy();
  });
});
