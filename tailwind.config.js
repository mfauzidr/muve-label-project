/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
        'sans': ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        gradientStart: '#26292e',
        gradientEnd: '#0f1012',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"]
  }
}

