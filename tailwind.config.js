/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816", //darkest blue
        secondary: "#aaa6c3", //light violet
        tertiary: "#151030", //navy blue
        "black-100": "#100d25", //darkblue
        "black-200": "#090325", //darkerblue
        "white-100": "#f3f3f3",
        orange: "#f9701a",
        blue: "#1974b3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
