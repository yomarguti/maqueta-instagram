module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      lineHeight: {
        1: '0.1em',
      },
      spacing: {
        350: '350px',
        935: '935px',
        450: '450px',
      },
      colors: {
        niceGray: '#fafafa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
