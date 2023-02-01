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
    'complexity': 'off',
    'id-blacklist': 'off',
    'no-empty': 'off',
    'no-invalid-this': 'off',
    'no-null/no-null': 'off',
    'no-plusplus': 'off',
    'object-shorthand': 'off',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
};
