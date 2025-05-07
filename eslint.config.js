import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    root: true,
    env: {
    browser: true,
    node: true,
    es2022: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', 
    },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      import: pluginImport,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
      'no-implicit-coercion': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-var': 'error',
      'prefer-const': 'error',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'only-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/newline-after-import': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended,
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
  }
]);
