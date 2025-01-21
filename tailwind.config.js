/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImg: "url('/src/image/home-hero.jpg')",
      },
    },
  },
  plugins: [],
};
