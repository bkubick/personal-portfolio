/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00D1FF',
        'secondary': '#061728',
      }
    },
  },
  plugins: [],
}
