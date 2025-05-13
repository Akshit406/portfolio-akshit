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
        'dark-primary': '#000000',       // Darkest
        'dark-secondary': '#0a173b',
        'dark-tertiary': '#0f1c52',      // Lighter dark
        'light-primary': '#FBFBFB',     // Lightest
        'light-secondary': '#E8F9FF',
        'light-tertiary': '#EEF7FF',    // Lighter light
        'accent': {
          DEFAULT: '#03346E', // Using a dark color as default for consistency
          light: '#E8F9FF',  // light accent
          dark: '#03346E',    // dark accent
        },
      },
      textColor: { //setting the text colors
        'dark': '#FBFBFB', // White text for dark theme
        'light': '#021526', // Black text for light theme
      }
    },
  },
  plugins: [],
}
