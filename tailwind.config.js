/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a03b87'
      },
      fontFamily: {
        mindbeam: ['mindbeam']
      },
      backgroundImage: {
        canvas: "url('/images/Background.png')"
      }
    },
  },
  plugins: [],
}

