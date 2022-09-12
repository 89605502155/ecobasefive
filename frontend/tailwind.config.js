/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      '2xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '888px','min':'658px'},
      // => @media (max-width: 888px) { ... }

      'md': {'max': '657px','min':'440px'},
      // => @media (max-width: 657px) { ... }

      'sm': {'max': '439px'},
      // => @media (max-width: 439px) { ... }
    },
    extend: {
      colors:{
        "black":'#000000',
        "damaskrose":'#FF4364'
      }
    },
  },
  plugins: [],
}
