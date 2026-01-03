import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import path from 'node:path';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['.next/**', '**/*.d.ts', '**/*.config.ts'],
  },
  {
    languageOptions: {
      globals: {
        process: 'readonly',
      },
    },
  },
  tseslint.configs.recommended,
  {
    name: 'react/recommended',
    ...react.configs.flat.recommended,
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    name: 'react/jsx-runtime',
    ...react.configs.flat['jsx-runtime'],
  },
  {
    name: '@eslint-js',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
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
]);
