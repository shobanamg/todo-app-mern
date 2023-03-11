module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4B5563",
        secondary: "#F87171",
      },
    },
  },
  variants: {},
  plugins: [],
};
