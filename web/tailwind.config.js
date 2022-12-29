/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'tooltip-inner',
    'bs-tooltip-top',
    'navbar-toggler',
    'navbar-toggler-icon',
    'navbar-collapse'
  ],
  theme: {
    extend: {
      lineHeight: {
        '0': '0',
      },
      width: {
        'xs': '20rem', // 320px
        'sm': '24rem', // 384px
        'md': '28rem', // 448px
        'lg': '32rem', // 512px
        'xl': '36rem', // 576px
        '2xl': '42rem', // 672px
        '3xl': '48rem', // 768px
        '4xl': '56rem', // 896px
        '5xl': '64rem', // 1024px
        '6xl': '72rem', // 1152px
        '7xl': '80rem', // 1280px
      }
    }
  },
  plugins: [],
}