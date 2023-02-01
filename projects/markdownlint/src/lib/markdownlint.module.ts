import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LintResultPipe } from './lint-result.pipe';

@NgModule({
  declarations: [
    LintResultPipe
  ],
  exports: [
    LintResultPipe
  ],
  imports: [
    CommonModule
  ]
})
export class MarkdownlintModule { }
