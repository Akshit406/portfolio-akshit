/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': '#111111',       // Darkest
        'dark-secondary': '#1e1e1e',
        'dark-tertiary': '#3c3c3c',      // Lighter dark
        'light-primary': '#FBFBFB',     // Lightest
        'light-secondary': '#E8F9FF',
        'light-tertiary': '#EEF7FF',    // Lighter light
        'light-primary-text': '#dddddd',
        'light-secondary-text': '#cbcbcb',
        'accent': {
          DEFAULT: '#03346E', // Using a dark color as default for consistency
          light: '#E8F9FF',  // light accent
          dark: '#212121',    // dark accent
        },
      },
      textColor: { //setting the text colors
        'dark': '#212121', // White text for dark theme
        'light': '#021526', // Black text for light theme
      }
    },
  },
  plugins: [],
}
