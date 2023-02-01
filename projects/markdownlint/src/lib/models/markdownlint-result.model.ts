export interface MarkdownlintResult {
  lineNumber: number;
  ruleNames: string[];
  ruleDescription: string;
  ruleInformation: string;
  errorDetail?: string;
  errorContext?: string;
  errorRange?: number[];
}
