module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: ['airbnb-typescript', 'eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'import'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'import/extensions': ['off'],
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0,
    'no-return-await': 0,
    'no-console': 0,
    'prettier/prettier': ['error'],
  },
};
