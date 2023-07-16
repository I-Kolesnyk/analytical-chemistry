/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
    },
    colors: {
      transparent: "transparent",
      teal: {
        50: "#E7FCFE",
        100: "#22A58D",
        200: "#2B8474",
      },
      lilac: {
        50: "#E290FE",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
      },
      zinc: {
        700: "#3f3f46",
      },
    },
  },
  plugins: [],
};
