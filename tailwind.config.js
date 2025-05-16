/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // root-level HTML file
    "./src/**/*.{html,js}", // all HTML and JS files inside src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
}

