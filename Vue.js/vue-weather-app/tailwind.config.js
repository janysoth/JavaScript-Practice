/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Defind Custom Colors
      color: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    // Add a container to avoid adding individually
    container: {
      padding: "2rem", // Left & Right
      center: true, // Similiar to margin-auto
    },
    // Change the default sizes
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

