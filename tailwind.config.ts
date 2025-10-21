import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0B',
        graphite: '#111111',
        steel: '#B3B3B3',
        blood: '#7A0E0E',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      transitionDuration: {
        '450': '450ms',
        '600': '600ms',
      },
      letterSpacing: {
        wide2: '.04em',
      },
    },
  },
  plugins: [],
};

export default config;
