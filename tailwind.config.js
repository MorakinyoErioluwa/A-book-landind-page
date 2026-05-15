/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        display: ['Schoolbell'],
        body: ['Inter'],
      },

    },
  },

  plugins: [],
}
