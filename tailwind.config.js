/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
