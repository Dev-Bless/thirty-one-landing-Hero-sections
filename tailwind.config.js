/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        snproBold: ['"SN Pro"', 'sans-serif'],
        snproLight: ['"SN Light"', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        shantell: ['Shantell Sans', 'cursive']

      },
      backgroundImage: {
        'hero-pattern': "('assets/page-1/roundular.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
