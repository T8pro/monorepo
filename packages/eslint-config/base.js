import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import prettierPlugin from 'eslint-plugin-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/.cache/**',
      '**/build/**',
      '**/*.config.{js,mjs}',
      '**/public/**',
      'next-env.d.ts',
      '**/.turbo/**',
      '**/coverage/**',
    ],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'prettier/prettier': 'error',
      'no-undef': 'off', // TypeScript handles this
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'import/order': 'off', // Disabled due to TypeScript resolver conflicts
      'import/no-duplicates': 'off', // Disabled due to TypeScript resolver conflicts
      'import/first': 'off', // Disabled due to TypeScript resolver conflicts
      'import/newline-after-import': 'off', // Disabled due to TypeScript resolver conflicts
      'import/no-unresolved': 'off', // TypeScript handles this
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
    rules: {
      'no-unused-vars': 'off', // Use TypeScript version instead
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
];
