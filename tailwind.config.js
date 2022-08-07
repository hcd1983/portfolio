/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vuepress/components/**/*.{js,vue,ts}",
    "./docs/.vuepress/theme/**/*.vue",
    "./docs/.vuepress/theme/**/*.styl",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
