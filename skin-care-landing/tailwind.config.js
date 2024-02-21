/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#101820',
        secondary: '#B67659',
        brown: '#553f38',
        gray: '#898A92'
      },
      backgroundImage: {
        'hero-image': "url('/images/woman.webp')",
        'figure-image': "url('/images/figure.webp')"
      }
    }
  },
  plugins: []
}
