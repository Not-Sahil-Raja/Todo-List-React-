/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "40vh": "40vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      colors: {
        lightbrown: "#7F675B",
        snow: "#FFFAFB",
        ashgray: "#A1B0AB",
        ashgraylight: "#d7dad40a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
