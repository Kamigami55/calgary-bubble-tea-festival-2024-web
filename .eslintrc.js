module.exports = {
  extends: ['next/core-web-vitals', 'eason', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'off',
    'react/no-unescaped-entities': 'off',
  },
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['eason/typescript'],
      rules: {
        'tailwindcss/classnames-order': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
};
