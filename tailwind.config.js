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
        "prop-card": "0px -1px 10px 0px rgba(51, 212, 106, 0.20)",
      },
      backgroundImage: {
        "gradient-image":
          "linear-gradient(180deg, rgba(15, 15, 15, 0.00) 0%, rgba(15, 15, 15, 0.40) 59.5%, #0F0F0F 100%)",
      },
    },
  },
  plugins: [daisyui],
};
