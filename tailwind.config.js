const colors = require("tailwindcss/colors");
module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      padding: {
        12.5: "50px",
      },
      margin: {
        2.8: "10.944px",
      },
    },
    colors: {
      primary: {
        light: "rgb(245, 148, 148)",
        default: "rgb(255, 81, 81)",
        dark: "rgb(248, 47, 47)",
      },
      gray: {
        200: "rgb(244, 245, 246)",
        700: "rgb(128, 139, 150)",
        900: "rgb(65, 81, 97)",
      },

      black: colors.black,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      sky: colors.sky,
      solid: colors.solid,
      yellow: colors.yellow,
      stone: colors.stone,
    },
  },
  plugins: [],
};
