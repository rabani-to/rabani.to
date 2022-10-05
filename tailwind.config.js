const tailwindcss = require("tailwindcss/defaultConfig")
const { sans } = tailwindcss.theme.fontFamily

/** @type { import('tailwindcss').Config } */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        montse: ["Montserrat", ...sans],
        roboto: ["Robot Slab", ...sans],
      },
    },
  },
  plugins: [],
}
