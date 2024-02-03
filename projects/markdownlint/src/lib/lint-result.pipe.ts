import { Pipe, PipeTransform } from '@angular/core';

import { MarkdownlintResult } from './models/markdownlint-result.model';

@Pipe({
  name: 'lintResult',
  standalone: true
})
export class LintResultPipe implements PipeTransform {
  public transform(value: MarkdownlintResult): string {
    return `${value.lineNumber}: [${value.ruleNames.join(', ')}] ${value.ruleDescription}, ${value.errorDetail}`;
  }
}
