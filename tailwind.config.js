/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.2s ease-out",
      },
      container: {
        screens: {
          "2xl": "100%", // or remove the default container max-width entirely
        },
      },
      colors: {
        light: {
          bg: "#131a22",
          bg2: "#76b3ff19",
          hl: "#48a3c6",
          hl2: "#ea5b5c",
          text: "#f3f3f3",
          secondaryText: "#999999",
          grey: "#9f9f9f76",
        },
        dark: {
          bg: "#181616",
          bg2: "#121212",
          hl: "#48a3c6",
          hl2: "#ea5b5c",
          text: "#f3f3f3",
          secondaryText: "#9f9f9f",
          grey: "#9f9f9f76",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
