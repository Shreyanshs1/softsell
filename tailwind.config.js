/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgba(var(--primary))",
        secondary:"rgba(var(--secondary))",
        tertiary:"rgba(var(--tertiary))",
        text1:"rgba(var(--text))",
        shadow:"rgba(var(--shadow))",
        logo:"rgba(var(--logo))",
        text2:"rgba(var(--text-secondary))",
      }
    },
  },
  plugins: [], 
  darkMode: 'class',
}

