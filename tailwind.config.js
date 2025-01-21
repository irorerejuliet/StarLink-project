/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImg: "url('/src/image/home-hero.jpg')",
        creativityimg: "url('/src/image/creativityimg.jpeg')",
        earthImg: "url('/src/image/earth-img.jpeg')"
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        Arimo: ["Arimo", "serif"],
      },
    },
  },
  plugins: [],
};
