/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: {
        900: "#233c64",
        800: "#2e4f83",
        700: "#3b66a9",
        600: "#4c82d9",
        500: "#538fee",
        400: "#75a5f1",
        300: "#8cb4f4",
        200: "#b0cbf7",
        100: "#cadcfa",
        50: "#eef4fd",
      },
      neutral: {
        900: "#000000",
        800: "#191919",
        700: "#333333",
        600: "#4c4c4c",
        500: "#666666",
        400: "#999999",
        300: "#b3b3b3",
        200: "#cccccc",
        100: "#e6e6e6",
        50: "#FFFFFF",
      },
      error: "#f9747b",
      success: "#92da6f",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
