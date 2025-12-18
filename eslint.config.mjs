import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import path from 'node:path';

export default defineConfig([
  tseslint.configs.recommended,
  {
    plugins: { react: pluginReact },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        runtime: 'automatic',
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.json'],
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
