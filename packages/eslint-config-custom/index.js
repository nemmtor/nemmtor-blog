module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    next: {
      rootDir: ['apps/landing-page/'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:promise/recommended',
        'plugin:security/recommended',
        'plugin:prettier/recommended',
        // 'plugin:unicorn/recommended',
      ],
      rules: {
        'import/prefer-default-export': 'off',
        'arrow-body-style': 'off',
        'react/function-component-definition': 'off',
        'prettier/prettier': 'error',
        '@next/next/no-html-link-for-pages': 'off',
      },
    },
  ],
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    // 'plugin:unicorn/recommended',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': 'error',
  },
};
