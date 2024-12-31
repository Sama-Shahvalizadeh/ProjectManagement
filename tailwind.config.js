/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "arabic-black":"ArabicDisplayBlack",
      "arabic-bold":"ArabicDisplayBold",
      "arabic-heavy":"ArabicDisplayHeavy",
      "arabic-light":"ArabicDisplayLight",
      "arabic-medium":"ArabicDisplayMedium",
      "arabic-semi-bold":"ArabicDisplaySemiBold",
      "arabic-thin":"ArabicDisplayThin",
      "arabic-ultra-light":"ArabicDisplayUltraLight",
      "saba":"Saba",
    },
    extend: {
      screens: {
        'h-sm': { 'raw': '(min-height: 600px)' },
        'h-md': { 'raw': '(min-height: 800px)' },
        'h-lg': { 'raw': '(min-height: 1000px)' },
        'h-xl': { 'raw': '(min-height: 1200px)' },
        'h-2xl': { 'raw': '(min-height: 1400px)' },
        'h-3xl': { 'raw': '(min-height: 1800px)' },
        'h-4xl': { 'raw': '(min-height: 2000px)' },
      },
    },
  },
  plugins: [],
}