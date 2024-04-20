/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
    },
    screens: {
      xs: "320px",
      ss: "608px",
      sm: "708px",
      md: "1001px",
      lg: "1199px",
      xl: "1400px",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
