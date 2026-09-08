/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'Inter', 'Lato', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#6c5ce7',
        secondary: '#a29bfe',
        accent: '#fd79a8',
        dark: '#0d0d10',
        light: '#dfe6e9',
      },
    },
  },
  plugins: [],
}
