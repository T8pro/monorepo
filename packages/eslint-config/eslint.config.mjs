import { config as baseConfig } from './base.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Allow console.log in config files for debugging
      'no-console': 'off',
      // Allow unused vars in config files (they might be used by other configs)
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
    },
  },
];
