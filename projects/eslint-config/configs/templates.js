module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'plugin:@angular-eslint/template/recommended',
    'plugin:prettier/recommended'
  ],
  'parser': '@angular-eslint/template-parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  'plugins': [
    '@angular-eslint/template'
  ],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'parser': 'angular'
      },
      {
        'usePrettierrc': true
      }
    ],
    '@angular-eslint/template/conditional-complexity': 'error',
    '@angular-eslint/template/cyclomatic-complexity': [
      'error',
      {
        'maxComplexity': 15
      }
    ],
    '@angular-eslint/template/i18n': 'off',
    '@angular-eslint/template/no-call-expression': 'off',
    '@angular-eslint/template/use-track-by-function': 'error'
  }
};
