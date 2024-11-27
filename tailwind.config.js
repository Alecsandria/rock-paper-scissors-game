/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
    },
    fontFamily: {
      sans: ['"Barlow Semi Condensed"',  ...defaultTheme.fontFamily.sans]
    },
    extend: {
      borderWidth: {
        3: "3px"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

