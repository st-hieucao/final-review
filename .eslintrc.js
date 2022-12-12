module.exports = {
  settings: {
    'import/resolver': {
      alias: [
        ['@shared', './src/shared'],
      ]
    }
  },
  rules: {
    // possible-errors
    'no-console': [1],
    'no-template-curly-in-string': [0],
    // best-practices
    curly: [2], // require {} in if, while, for , ...
    'default-case': [1], // require default value in switch statement
    'default-case-last': [1], // require default value in the last of state ment
    eqeqeq: [1, 'always'], // use === instead ==
    'no-multi-spaces': [1], 
    'no-alert': [1], 
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // variables
    'no-undef-init': [2], // no define a variable === undifined

    // stylistic-issues
    'array-bracket-newline': [1, 'consistent'], // format array
    'brace-style': [2], // format function, if else, try catch, class correct format
    camelcase: [1],
    'comma-spacing': [1, { 'before': false, 'after': true }], // require before ',' no space && after ',' must have space
    'eol-last': [2, 'always'], // require files end with a newline
    'object-curly-newline': [1, { consistent: true }], // format object new line each key
    'object-curly-spacing': [1, 'always'],
    'func-style': [0],
    quotes: [1, 'single'],
    semi: [1, 'always'],
    'semi-style': [2, 'last'],
    'no-nested-ternary': [1],
    'no-unneeded-ternary': [2],
    'no-whitespace-before-property': [2],
    'no-trailing-spaces': [1, { 'skipBlankLines': true }],
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    '@typescript-eslint/no-var-requires': 0,

    // es 6
    'arrow-spacing': [1, { 'before': true, 'after': true }],
    'no-duplicate-imports': [1],
  },

  // use import module es6
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 2020
  }
}
