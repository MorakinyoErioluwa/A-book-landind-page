/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body : ['Inter', 'sans-serif']
    },

    },
  },
  plugins: [],
}


