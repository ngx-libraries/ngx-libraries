module.exports = {
  plugins: [
    'prettier-plugin-organize-attributes'
  ],
  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  singleAttributePerLine: true,
  attributeGroups: [
    '$ANGULAR_ELEMENT_REF',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ID',
    '$NAME',
    '$TYPE',
    '$CLASS',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_OUTPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$DEFAULT'
  ]
};
