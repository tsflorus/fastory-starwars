/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#FFE81F',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'tattooine': 'rgb(82,59,88)',
      'warp-speed': 'rgb(84,167,217)',
      'gold': 'rgb(160,122,61)',
      'blue': 'rgb(42,49,130)',
      'chewy': 'rgb(118,75,40)',
      'luke-lightsaber': 'rgb(53,194,222)',
      'rebel-red': 'rgb(195,31,38)'
    },
    fontFamily: {
      starJedi: ['Star Jedi', 'sans-serif'],
      starJediOutlined: ['Star Jedi Outlined', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

