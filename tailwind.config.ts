const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F1F2F4",
        "secondary": "#323c3d",
        "secondary-light": "#5C635E",
        "third": "#FAAF1D"
      },
    },
  },
  plugins: [],
};
export default config;
