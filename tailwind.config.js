/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: '#173C40',
      secondary: "#E68850",
      'secondary-accent': "#F9EBE2"
    },
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.8,
      modifierTransition: 'background 0.3s',
      activeTransition: 'background 0.2s'
    }),
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-ripple')()
  ],
}

