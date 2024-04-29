import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { 500: "#33D46A", 400: "#49F684", 700: "#13903E" },
        black: "#0f0f0f",
      },
      boxShadow: {
        e: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [daisyui],
};
