/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vuepress/**/*.vue",
    "./themes/**/*.{js,vue,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Noto Sans TC', 'sans-serif'],
      'cursive': ['Fredericka the Great', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
