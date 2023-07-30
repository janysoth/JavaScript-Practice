
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#032ea1",
        "weather-secondary": "#0E86D4",
        "cambodia-red": "#e00025",
        "cambodia-blue": "#032ea1",
      },
      maxWidth: {
        '50': '50px',
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};