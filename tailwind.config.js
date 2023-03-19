/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    'dark-cyan': 'hsl(185, 75%, 39%)',
    'dark-blue': 'hsl(229, 23%, 23%)',
    'grayish-blue': 'hsl(227, 10%, 46%)',
    'dark-grey': 'hsl(0, 0%, 59%)',
  },
  fontFamily: {
    sans: ['Kumbh Sans', 'sans-serif'],
  }
}
