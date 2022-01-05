const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./pages/**/**.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        mygreen: {
          100: '#00cda1',
          500: '#039b7a'
        }
      }
    },
  },
  plugins: [],
}
