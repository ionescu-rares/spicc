/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      colors: {
        brand: "#365b66",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "dim", "forest"],
  },
};
