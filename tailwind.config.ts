import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#8B5E83',
        'primary-light': '#C9A7C7',
        'primary-dark': '#6B4563',
        secondary: '#2A6B5A',
        accent: '#E8A87C',
        cream: '#FFF8F0',
        border: '#E8E0DB',
        /** Body text (reduces long arbitrary class strings sitewide) */
        ink: '#2D2D2D',
        'ink-muted': '#6B6B6B',
      },
    },
  },
  plugins: [],
};

export default config;
