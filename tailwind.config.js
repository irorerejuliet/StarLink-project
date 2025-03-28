/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImg: "url('/src/image/home-hero.jpg')",
        creativityimg: "url('/src/image/creativityimg.jpeg')",
        earthImg: "url('/src/image/earth-img.jpeg')",
        rockectimg: "url('/src/image/rockect-img.jpeg')",
        Residential: "url('/src/image/residential_bg.jpeg')",
        Residential2: "url('/src/image/residential_main-bg.jpeg')",
        highSpeed: "url('/src/image/highSpeed-bg.jpeg')",
        weather: "url('/src/image/weatherResilent-img.jpeg')",
        hardware: "url('/src/image/hardware-bg.jpeg')",
        roam: "url(/src/image/roam-bg.jpeg)",
        workPlay: "url(/src/image/workPlay.jpg)",
        starlinkMotion: "url(/src/image/Starlink-motion.jpeg)",
        Resilentweather: "url(/src/image/Resilentweather.jpeg)",
        residentialEarth: "url(/src/image/residential_earth-img.jpeg)",
        BusinessBg: "url(/src/image/business-home.jpeg)",
        UnlimitedService: "url(/src/image/UnlimitedService.jpeg)",
        fixedsiteBackgroud: "url(/src/image/fixedsiteHeroBg.jpeg)",
        FixedSiteEarth: "url(/src/image/fixedsiteEarth1.webp)",
        busnessRunning: "url(/src/image/KeepYourBusinesRunimg.jpeg)",
        fixedWeatherResilence: "url(/src/image/fixedsiteWeather.jpeg)",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        Arimo: ["Arimo", "serif"],
      },
    },
  },
  plugins: [],
};
