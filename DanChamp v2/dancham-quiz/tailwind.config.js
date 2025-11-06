/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#1a1f3a',
        'danish-red': '#c41e3a',
        'red-light': '#e74c3c',
        'red-hover': '#a01829',
        'navy-light': '#2c3454',
        'grey-text': '#666666',
        'grey-light': '#e0e0e0',
        'off-white': '#f8f9fa',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      maxWidth: {
        'quiz': '800px',
      },
      boxShadow: {
        'card': '0 4px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 6px 20px rgba(0,0,0,0.12)',
        'button': '0 4px 12px rgba(196, 30, 58, 0.3)',
        'button-hover': '0 6px 20px rgba(196, 30, 58, 0.4)',
      }
    },
  },
  plugins: [],
}
