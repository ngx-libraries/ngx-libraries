module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  'plugins': [
    '@angular-eslint',
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-no-null',
    'eslint-plugin-prefer-arrow',
    'import-newlines'
  ],
  'rules': {
    '@angular-eslint/component-class-suffix': 'error',
    '@angular-eslint/component-max-inline-declarations': 'error',
    '@angular-eslint/component-selector': [
      'error',
      {
        'prefix': ['lib'],
        'style': 'kebab-case',
        'type': 'element'
      }
    ],
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': [
      'error',
      {
        'prefix': ['lib'],
        'style': 'camelCase',
        'type': 'attribute'
      }
    ],
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-forward-ref': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/use-component-view-encapsulation': 'error',
    '@angular-eslint/use-lifecycle-interface': 'warn',
    '@angular-eslint/use-pipe-transform-interface': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'Boolean': {
            'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?'
          },
          'Function': {
            'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
          },
          'Number': {
            'message': 'Avoid using the `Number` type. Did you mean `number`?'
          },
          'Object': {
            'message': 'Avoid using the `Object` type. Did you mean `object`?'
          },
          'String': {
            'message': 'Avoid using the `String` type. Did you mean `string`?'
          },
          'Symbol': {
            'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?'
          }
        }
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
        'overrides': {
          'constructors': 'no-public'
        }
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['camelCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'allow'
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'allow'
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      },
      {
        'selector': 'enumMember',
        'format': ['PascalCase', 'UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        'allowStaticOnly': true,
        'allowWithDecorator': true
      }
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        'hoist': 'all'
      }
    ],
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'complexity': [
      'error',
      {
        'max': 20
      }
    ],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': false
      }
    ],
    'import/no-unassigned-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'warnOnUnassignedImports': true
      }
    ],
    'jsdoc/check-alignment': 'error',
    'jsdoc/no-types': 'error',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        'code': 140,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
      }
    ],
    'max-lines': [
      'error',
      400
    ],
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-null/no-null': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': [
      'error',
      {
        'message': 'Please import directly from \'rxjs\' instead',
        'name': 'rxjs/Rx'
      }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement'
    ],
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true
      }
    ],
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-useless-constructor': 'off',
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'padding-line-between-statements': [
      'off',
      {
        'blankLine': 'always',
        'next': 'return',
        'prev': '*'
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'allowStandaloneDeclarations': true
      }
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    'quotes': 'off',
    'radix': 'error',
    'sort-keys': 'off',
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'asyncArrow': 'always',
        'named': 'never'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'yoda': 'error'
  }
};
