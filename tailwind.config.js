/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        specialFont: ["Playwrite US Trad", "cursive"]
      }
    },
  },
  plugins: [],
}