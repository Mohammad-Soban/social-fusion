module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { 300: "#4fd8e0" },
        blue: { "500_0a": "#2aa3ef0a" },
        black: { 900: "#000000" },
        blue_gray: { 50: "#f1f1f1" },
        light_blue: { A400: "#00c2ff" },
        teal: { 900: "#01264e" },
        light_green: { A200: "#abf74b" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", roboto: "Roboto" },
      backgroundImage: { gradient: "linear-gradient(223deg ,#01264e,#000000)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
