/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96",
      primaryDark: "#58E6D9",
      gray: "#333333",
    }
  },
  backgroundImage:{
    circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);'
  },
  screens: {
    // 2xl: {max : 1535px},
    xl : { max : "1279px"},
    lg : { max : "1023px"},
    md : { max : "767px"},
    sm : { max : "639px"},
    xs : { max : "479px"}
  },
  plugins: [],
}