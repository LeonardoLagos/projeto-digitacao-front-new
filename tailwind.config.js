/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#3C2342",
      secondary: "#61944E",
      white: "#FFFFFF",
      blackPrimary: "rgba(0, 0, 0, 0.87)",
      blackSecondary: "rgba(0, 0, 0, 0.6)",
      danger: " #E43434",
      warning: " #fbec5d",
    },
  },
  plugins: [],
};
