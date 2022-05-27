module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:security/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/?(*.)+(test).ts?(x)'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+test.ts?(x)'] },
        ],
      },
    },
  ],
};
