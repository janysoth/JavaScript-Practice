
// tailwind.config.js
module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      safelist: [/^grid-rows-/, /^grid-cols-/, /^gap-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "cambodia-red": "#e00025",
        "cambodia-blue": "#032ea1",
        "light-blue": "#7EC8E3",
        "White": "ffffff",
      },
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
      lg: "896px",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};

