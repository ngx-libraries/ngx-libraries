module.exports = {
  'rules': {
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        'minItems': 1
      }
    ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': true,
        'objectsInArrays': false,
        'arraysInArrays': false
      }
    ],
    'array-element-newline': [
      'error',
      'always'
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'multiline': true,
          'minProperties': 1,
          'consistent': true
        },
        'ObjectPattern': {
          'multiline': true,
          'consistent': true
        }
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error'
    ],
    'import-newlines/enforce': [
      'error',
      {
        'items': 4,
        'max-len': 140,
        'semi': true
      }
    ],
    'function-paren-newline': [
      'error',
      'multiline-arguments'
    ],
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'newline-per-chained-call': [
      'error',
      {
        'ignoreChainWithDepth': 1
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ]
  }
};
