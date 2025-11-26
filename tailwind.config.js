/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./scripts/**/*.js","./styles/*css"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#ECB6B6",
          DEFAULT: "#BD3C3C",
          dark: "#A51010",
          deep: "#BF1C1C",
        },
        offwhite: {
          light: "#F7F7F7",
          lighter: "#FCFCFC",
        },
      },
      backgroundImage: {
        "home": "url('/whatsappfood/assets/bg.png')",
      },
    },
  },
  plugins: [],
}
