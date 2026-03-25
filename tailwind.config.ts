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
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#8B5E83',
        'primary-light': '#C9A7C7',
        'primary-dark': '#6B4563',
        secondary: '#2A6B5A',
        accent: '#E8A87C',
        cream: '#FFF8F0',
        border: '#E8E0DB',
      },
    },
  },
  plugins: [],
};

export default config;
