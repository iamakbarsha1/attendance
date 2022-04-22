module.exports = {
  purge: ["./Components/**/*.{js,jsx}", "./public/index.html"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
