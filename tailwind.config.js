/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1080px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
      bodyFont: ['Poppins','sans-serif'],
      titleFont: ['MOntserrat','sans-serif']
    },
    
  }
  },
  plugins: [],
}