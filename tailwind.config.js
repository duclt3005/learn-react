/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "body": ["sans-serif"]
      },
      colors: {
        primary: "#F62682"
      }
    },
  },
  plugins: [],
}
