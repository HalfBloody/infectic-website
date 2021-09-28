module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#2b2b2b",
          darker: "#2A2C2B",
          dark: "#3E4140",
          DEFAULT: "#707573",
          light: "#B2B2B2",
          lightest: "#FAFAFA",
        },
        red: {
          DEFAULT: "#CD2D0F",
          light: "#EDA492",
          lightest: "#FCF0ED"
        },
        black: {
          DEFAULT: "#2A2C2B",
        },
        primary: {
          darkest: "#5C0A0A",
          darker: "#97020C",
          dark: "#D0061B",
          darkened: "#E8304A",
          DEFAULT: "#FC5F75",
          lightend: "#FE9AA8",
          light: "#FEB8C2",
          lighter: "#FFE0E5",
          lightest: "#FFF5FD",
        },
        anthrazit: {
          darkest: "#2C2122",
          darker: "#3F3133",
          dark: "#594A4C",
          darkened: "#726566",
          DEFAULT: "#918385",
          lightened: "#C3B7B9",
          light: "#D7CCCD",
          lighter: "#E9E2E3",
          lightest: "#F5F0F1",
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
