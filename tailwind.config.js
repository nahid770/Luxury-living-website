/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif']
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}