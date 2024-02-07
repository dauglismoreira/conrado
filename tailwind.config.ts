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
        soft1: '#987F6A',
        primary: '#382020',
        secondary: '#3C2222',
        mediumLight: '#CEBCB0',
        regularLight: '#343E46',
        ultralight: '#FAF8F7',
        wht: '#2A372F',
      },
    },
  },
  plugins: [],
};
export default config;
