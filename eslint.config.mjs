import js from '@eslint/js';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import parser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import playwright from 'eslint-plugin-playwright';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  { 
    name: "globalSettingsEslint",
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser,
    },
    plugins: {
      js,
      prettier,
      import: importPlugin
    },
    rules: {
      'prettier/prettier': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
    },
  },
  {
    name: "ui-tests",
    files: ['ui-tests/**/*.{js,ts}'],
    languageOptions: { globals: globals.browser },
  },
  { 
    name: "api-tests",
    files: ['api-tests/**/*.{js,ts}'],
    languageOptions: { globals: globals.node },
  },
]);
