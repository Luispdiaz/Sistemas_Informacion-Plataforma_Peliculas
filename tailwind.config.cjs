/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      getWellColor: "#008B8B",
      white: "#FFFFFF",
      gris: '#808080',
      gris500: '#80808052',
      blue500: '#3b82f6',
      slate100: '#f1f5f9',
      grisFondo: '#80808010'
    },
    extend: {},
  },
  plugins: [],
}