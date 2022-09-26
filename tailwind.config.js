/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#b8ca9d'
      },
    },


  },
  plugins: [],
}