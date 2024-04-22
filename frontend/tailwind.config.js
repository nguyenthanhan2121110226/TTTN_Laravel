module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main-dark-bg-color': "#413F42",
        'second-dark-bg-color': "#0F0E0E",
        'main-text-color': "#FBCB0A",
        'main-dark-text-color': "#dcdcdc",
        'second-dark-text-color': "#f7f7f7",
        'main-light-text-color': "#1d1d1d",
        'second-light-text-color': "#545454",
        'main-light-bg-color': "#ededed",
        'second-light-bg-color': "#ffffff",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        "main": "rgba(149, 157, 165, .2) 0px 8px 24px",
      },
    },
    screens: {
      'xl': {'min': '1023px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '439px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
