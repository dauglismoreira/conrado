const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1180': '1180px',
        '1480': '1480px'
      },
      colors: {
        "primary": "#F1F2F4",
        "secondary": "#323c3d",
        "secondary-light": "#5C635E",
        "third": "#FAAF1D",
        "gray": "#cdcdcd"
      },
    },
  },
  plugins: [],
};
export default config;
