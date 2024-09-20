import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // my_bg_image: "url('/cover-1.jpg')",
      },
      colors: {
        "main-color": "#313f2a",
        "accent-color-100": "rgb(254, 125, 31)",
        "accent-color-50": "rgb(254, 125, 31)",
        "bg-dark": "rgb(18, 18, 18)",
        deepSeaweed: {
          "tints-100": "#4a5744",
          "tints-200": "#646f5f",
          "tints-300": "#7e8779",
          "tints-400": "#989f94",
          "tints-500": "#b1b7af",
          "tints-600": "#cbcfc9",
          "tints-700": "#e5e7e4",
          "shades-100": "#2a3724",
          "shades-200": "#242f1f",
          "shades-300": "#1e271a",
          "shades-400": "#181f15",
          "shades-500": "#12170f",
          "shades-600": "#0c0f0a",
          "shades-700": "#060705",
        },
        "lunar-green": {
          "50": "#f3f6ef",
          "100": "#e2ecdb",
          "200": "#cadabc",
          "300": "#a8c294",
          "400": "#89aa71",
          "500": "#6b8f53",
          "600": "#52713f",
          "700": "#415734",
          "800": "#37472d",
          "900": "#313f2a",
          "950": "#172013",
        },
        "main-palleton": {
          "100": "#7D9572",
          "200": "596E4F",
          "300": " #253A1A",
          "400": "#253A1A",
        },
      },

      screens: {
        mobile: "440px",
        tall: { raw: "(min-height: 1100px)" },
      },
    },
  },
  plugins: [],
};
export default config;

// <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

// @media screen and (max-width: 800px),
//        screen and (max-height: 600px) {
//   ...
// }
//setting colors as part of the theme remobes other
