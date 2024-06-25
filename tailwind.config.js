/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,react}"],
  theme: {
    colors: {
      magenta: "#DA6E7B",
      red: "#A73443",
      blue: "#708FDF",
      darkBlue: "#2D529F",
      purple: "#7B35B1",
      reallyWhite: "#ffff",

      white: "#EFEFEF",
      grey: {
        1: "#C2C2C2",
        2: "#7C7C7C",
        3: "#3C3C3C",
        4: "#121212",
      },
    },
    extend: {
      backgroundImage: {
        circleRed: "url(/Images/circleRed.png)",
        circleBlue: "url(/Images/circleBlue.png)",
        circlePurple: "url(/Images/circlePurple.png)",
      },
    },
  },
  plugins: [],
};
