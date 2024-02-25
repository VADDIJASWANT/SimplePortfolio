/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        dark_primary:'rgb(6 34 63)',
        lightWhite:"#ececec",
      },
      textColor:{
        dark_primary:'rgb(6 34 63)'
      },
      backgroundImage:{
        primaryLinear:'linear-gradient(180deg,#B6CCF5 .48%,#D5E3F1 100%)',
      },
      fontFamily:{
        kalam:['Kalam', ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      opacity: {
        '0': '0',
        '10': '0.1',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '90': '0.9',
        '100': '1',
      },
    },
  },
  plugins: [],
}

