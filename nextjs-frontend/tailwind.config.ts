import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
