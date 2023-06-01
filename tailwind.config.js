const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#00A94A",
      },
      colors: {
        primary: "#00A94A",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        primary: "0px 3px 6px var(--tw-shadow-color)",
      },
      screens: {
        xs: "375px", // => @media (min-width: 375px) { ... }
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({matchUtilities, theme}) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        {values: theme("textShadow")}
      );
    }),
  ],
};
