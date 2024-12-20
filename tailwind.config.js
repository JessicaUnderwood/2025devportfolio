/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'im-fell': ['IM Fell DW Pica', 'serif'],
        'reenie-beanie': ['"Reenie Beanie"', 'cursive'],
        'anaheim': ['Anaheim', 'sans-serif'],
    },
      colors: {
        golden:  '#fad54f'
      },
  },
  plugins: [],
 }
}
