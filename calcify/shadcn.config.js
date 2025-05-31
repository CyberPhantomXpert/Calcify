module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Dark background color
        secondary: '#f43f5e', // Accent color for buttons and highlights
        accent: '#06b6d4', // Cyan color for links and interactive elements
        background: {
          light: '#ffffff', // Light mode background
          dark: '#1e293b', // Dark mode background
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable active state for background color
      textColor: ['active'], // Enable active state for text color
    },
  },
  plugins: [],
};