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
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
