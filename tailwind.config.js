module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
