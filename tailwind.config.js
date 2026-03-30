/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0c1b2e',
        surface: '#1a2f45',
        border: '#2d4a6a',
        'accent-blue': '#4a9ece',
        'accent-olive': '#8fa84e',
        'text-primary': '#e2eaf2',
        'text-secondary': '#8aa8c0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
