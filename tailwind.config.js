/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vuepress/**/*.vue",
    "./docs/**/*.md",
    "./themes/**/*.{js,vue,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      }
    },
    fontFamily: {
      'sans': ['Noto Sans TC', 'sans-serif'],
      'cursive': ['Fredericka the Great', 'cursive'],
      'swiss': [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Noto Sans TC',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: '#ff8800',
      }
    },
  },
  plugins: [],
}
