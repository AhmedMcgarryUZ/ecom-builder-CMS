module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: ['selector'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '0.33px',
        0: '0',
        2: '1px',
        3: '2px',
        4: '3px',
        6: '4px',
        8: '5px'
      }
    }
  },
  plugins: []
}
