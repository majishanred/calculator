/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        screens: {
          'xs': '375px',
          's': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1440px',
        }
      },
      container: {
        center: true
      }
    },
  },
  plugins: [createThemes({
    dark: {
      'screen': {
        'main': 'hsl(222,26%,31%)',
        'keypad': 'hsl(223,31%,20%)',
        'display': 'hsl(224,36%,15%)'
      },
      'key': {
        'primary': {
          'bg': 'hsl(30,25%,89%)',
          'shadow': 'hsl(28,16%,65%)'
        },
        'secondary': {
          'bg': 'hsl(225,21%,49%)',
          'shadow': 'hsl(224,28%,35%)'
        },
        'imp': {
          'bg': 'hsl(6,63%,50%)',
          'shadow': 'hsl(6,70%,34%)'
        }
      },
      'white': 'hsl(0,0%,100%)',
      'primary': 'hsl(221,14%,31%)'
    },
    light: {
      'screen': {
        'main': 'hsl(0,0%,90%)',
        'keypad': 'hsl(0,5%,81%)',
        'display': 'hsl(0,0%,93%)'
      },
      'key': {
        'primary': {
          'bg': 'hsl(45,7%,89%)',
          'shadow': 'hsl(35,11%,61%)'
        },
        'secondary': {
          'bg': 'hsl(185,42%,37%)',
          'shadow': 'hsl(185,58%,25%)'
        },
        'imp': {
          'bg': 'hsl(25,98%,40%)',
          'shadow': 'hsl(25,99%,27%)'
        }
      },
      'white': 'hsl(0,0%,100%)',
      'primary': 'hsl(60,10%,19%)'
    },
    purple: {
      'screen': {
        'main': 'hsl(268,75%,9%)',
        'keypad': 'hsl(268,71%,12%)',
        'display': 'hsl(268,71%,12%)'
      },
      'key': {
        'primary': {
          'bg': 'hsl(268,47%,21%)',
          'shadow': 'hsl(290,70%,36%)'
        },
        'secondary': {
          'bg': 'hsl(281,89%,26%)',
          'shadow': 'hsl(285,91%,52%)'
        },
        'imp': {
          'bg': 'hsl(176,100%,44%)',
          'shadow': 'hsl(177,92%,70%)'
        }
      },
      'white': 'hsl(0,0%,100%)',
      'primary': 'hsl(52,100%,62%)',
      'dark-blue': 'hsl(198,20%,13%)'
    }
  })],
}

