module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: { 100: "#F7F7F7", 200: "#CFCFD0", 300: "#B3B3B3", 400: "#626262" },
      orange: "#EC6C06",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
