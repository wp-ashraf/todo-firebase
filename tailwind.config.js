/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#4a5959",
        yellow: "#fffaae",
        "dark-yellow": "#fcca3f",
        orange: "#f68280"
      }

    },
  },
  plugins: [],
}