module.exports = {
  'rules': {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        'ignoreParameters': true
      }
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        'hoist': 'never'
      }
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true
      }
    ],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        'lib': 'always',
        'path': 'always',
        'types': 'prefer-import'
      }
    ],
    '@typescript-eslint/unbound-method': 'off',
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'complexity': 'off',
    'id-blacklist': 'off',
    'max-len': [
      'error',
      {
        'code': 280,
        'ignorePattern': '^import'
      }
    ],
    'no-empty': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'no-null/no-null': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'object-shorthand': 'off',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
};
