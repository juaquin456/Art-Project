/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "green-dark": "#172601",
      "green-yellow": "#D2D904",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple,
      teal: colors.teal,
      orange: colors.orange,
      lime: colors.lime,
      cyan: colors.cyan,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
}

