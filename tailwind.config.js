/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      'large': {'max': '1600px'},
      'middle': {'max': '1040px'},
      'small': {'max': '768px'},
      'laptop': {'max': '1390px'},
    },
    fontFamily: {
      poppins: ['Poppins', "sans-serif"],
      opensans: ['Open Sans', "sans-serif"],
    },
  },
}
