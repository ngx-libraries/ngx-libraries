module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'max-line-length': 140,

    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': null,
    'selector-pseudo-element-no-unknown': null,
    'no-empty-source': null,

    'number-leading-zero': null,
    'selector-list-comma-newline-after': null,
    'at-rule-empty-line-before': null,
    'selector-pseudo-element-colon-notation': null,

    'selector-class-pattern': null
  }
};
