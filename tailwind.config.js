/** @type {import('tailwindcss').Config} */

const plugin =require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Labrada': ['"Labrada"', 'serif'],
        'Montserrat': ['"Montserrat"', 'sans-serif'],
        'Quicksand': ['"Quicksand"', 'sans-serif'],
        'Tilt': ['"Tilt Warp"', 'cursive'],
        'Baloo': ['"Baloo 2"', 'cursive'],
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide':{
          '-ms-overflow-style':'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar':{
          '-ms-overflow-style':'block',
          'scrollbar-width': 'block',
          '&::-webkit-scrollbar': {
            display: 'block'
          }
        }
      })
    }),
  ],
}
