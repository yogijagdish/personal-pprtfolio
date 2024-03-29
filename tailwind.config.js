/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    screens: {
      'sm': '960px',
      // => @media (min-width: 576px) { ... }

      'md': '1440px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
      bodyFont: ['Poppins','sans-serif'],
      titleFont: ['MOntserrat','sans-serif']
    },
    colors: {
      textColour: '#333333',
      backgroundColour: '#B6DCD4',
      navColour: '#C9BE12 ',
      secondBackgroundColour: '#EAE6D7',
      navTextColour: '#000000'
    }
    
  }
  },
  plugins: [],
}