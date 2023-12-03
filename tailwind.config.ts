import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'primary-gradient': '#3490dc', 
      },
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
