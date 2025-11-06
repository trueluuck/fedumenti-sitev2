import js from '@eslint/js';
import next from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': next,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Suas regras aqui
    },
  },
];
