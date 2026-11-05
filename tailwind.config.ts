import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#040711',
          900: '#080d1a',
          850: '#0c1427',
          800: '#101c36',
          700: '#1a2e56',
          cyan: '#00f0ff',
          emerald: '#10b981',
          blue: '#3b82f6',
          accent: '#38bdf8'
        }
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
