/** @type {import('tailwindcss').Config} */
import TailwindForm from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: `"DM Serif Text", serif`,
        inter: `"Inter", sans-serif`,
      },
    },
  },
  plugins: [TailwindForm],
};
