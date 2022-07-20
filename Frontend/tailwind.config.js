/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1750px",
    },
    colors: {
      "tac-100": "#9FADC8",
      "tac-200": "#5E719A",
      "tac-300": "#282F3D",
      "tac-400": "#1F2532",
      "tac-500": "#171C27",
      "tac-orange": "#ECA251",
      "tac-blue": "#51C7EC",
      transparent: "transparent",
      gradientlight: "#242A36",
      gradientDark: "#141A24",
    },
  },
  plugins: [],
};
