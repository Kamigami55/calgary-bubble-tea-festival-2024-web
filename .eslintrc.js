module.exports = {
  extends: ['next/core-web-vitals', 'eason'],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['next/core-web-vitals', 'eason/typescript'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
};
