module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#2A2C2B",
          dark: "#3E4140",
          DEFAULT: "#707573",
          light: "#B2B2B2",
          lightest: "#FAFAFA",
        },
        red: {
          DEFAULT: "#CD2D0F",
          light: "#EDA492",
          lightest: "#FCF0ED"
        }
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      border: ['hover'],
    },
  },
  plugins: [],
}
