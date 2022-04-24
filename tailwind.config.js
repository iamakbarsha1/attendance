module.exports = {
  purge: [
    "./src/Components/**/*.{js,jsx}",
    "./public/index.html",
    "./pages/**/*.{js,jsx}",
    "./styles/**/*.{css}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "375px" },
        // 'sm': {'min': '640px', 'max': '767px'},
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
  ],
};
