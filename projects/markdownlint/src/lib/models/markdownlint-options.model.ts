export interface MarkdownlintOptions {
  config: {
    [key: string]: boolean | Object;
  };
  resultVersion: 1 | 2 | 3;
}
