/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          discordDark:{
             100:"#424549",
             200:"#36393e",
             300:"#282b30",
             400:"#1e2124"
          },
          discordBlue:"#7289da"
      }
    },
  },
  plugins: [],
}
