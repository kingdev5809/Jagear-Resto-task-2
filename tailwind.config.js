/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          pink: "#e97c69",
          secondary: "#1e1c29",
          primary: "#151030",
          brown: '#543c3b',
          "black-100": "#252836",
          "black-200": "#1F1D2B",
          "white-100": "#f1f1f1",

        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };

  