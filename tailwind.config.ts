import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px', // Custom breakpoint from Figma spec
      // sm: '640px', // Disable built-in unused breakpoint
      // md: '768px', // Disable built-in unused breakpoint
      lg: '1024px', // Built-in breakpoint
      // xl: '1280px', // Disable built-in unused breakpoint
      // '2xl': '1536px', // Disable built-in unused breakpoint
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#310C03',
        secondary: '#F0E6DA',
      },
    },
  },
  plugins: [],
};
export default config;
