module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyberpunk-neon': {
          DEFAULT: '#00ffcc',
          dark: '#00b3a6',
        },
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}