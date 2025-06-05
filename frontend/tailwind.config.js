/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { themes as daisyThemes } from "daisyui/src/theming/themes";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: Object.entries(daisyThemes).map(([name, theme]) => ({
      [name]: {
        ...theme,
        primary: "#ff87ab", // your pink color
      },
    })),
  },
};