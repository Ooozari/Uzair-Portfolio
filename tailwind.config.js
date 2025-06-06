/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
  'dark-bg': '#0a0a0a',
  'dark-text': '#f5f5f7',
  'light-bg': '#ffffff',
  'light-text': '#1a1a1a',
},

    },
  },
  plugins: [],
}