module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      colors: {
        green: "var(--color-green)",
        darkGreen: "var(--color-dark-green)",
        light: "var(--color-light)",
        gold: "var(--color-gold)",
        goldHover: "var(--color-goldhover)",
        black: "var(--color-black)",
        white: "var(--color-white)",
      },
      fontFamily: {
        german: ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
};
