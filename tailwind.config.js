const colors = require('tailwindcss/colors')

const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    gray: colors.gray,
    blue: colors.sky,
    red: colors.rose,
    pink: colors.fuchsia,
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
}

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme,
  plugins: [],
}
