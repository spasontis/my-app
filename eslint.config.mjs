import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import path from 'node:path';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    name: 'ignores',
    ignores: [
      '.next/**',
      'src/shared/api/artifacts/generated.ts',
      'next-env.d.ts',
    ],
  },
  {
    name: 'globals',
    languageOptions: {
      globals: {
        process: 'readonly',
        ...globals.browser,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    name: '@eslint-js',
    ...js.configs.recommended,
  },
  {
    name: 'eslint-plugin-react',
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    settings: {
      react: { version: 'detect' },
    },
  },
  reactHooks.configs.flat['recommended-latest'],
  {
    name: 'eslint-plugin-i18n-json',
    files: ['src/shared/assets/locales/*.json'],
    plugins: { 'i18n-json': i18nJsonPlugin },
    processor: {
      meta: { name: '.json' },
      ...i18nJsonPlugin.processors['.json'],
    },
    rules: {
      'i18n-json/identical-keys': [
        'error',
        {
          filePath: path.resolve('src/shared/assets/locales/ru.json'),
        },
      ],
      'i18n-json/identical-placeholders': [
        'error',
        {
          filePath: path.resolve('src/shared/assets/locales/ru.json'),
        },
      ],
      'i18n-json/sorted-keys': 'error',
      'i18n-json/valid-json': 'error',
    },
  },
  {
    name: 'eslint-plugin-eslint-comments',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { 'eslint-comments': eslintCommentsPlugin },
    rules: {
      'eslint-comments/no-use': 'error',
    },
  },
  {
    name: 'project-rules',
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    },
  },
  {
    name: 'project: stories',
    files: ['src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'react/jsx-no-literals': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    name: 'env/node-globals',
    files: ['vitest.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
