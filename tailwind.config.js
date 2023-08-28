/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        OpenSans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

