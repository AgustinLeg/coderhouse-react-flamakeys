/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#FF6915',
      secondary: '#F4F4F4',
    },
    fontFamily: {},
  },
  plugins: [require('flowbite/plugin')],
}
