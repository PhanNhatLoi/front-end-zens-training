import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // app color config
        primary: {
          50: "#D6E4F9",
          100: "#BBD2F5",
          200: "#99BCF0",
          300: "#77A6EB",
          400: "#5590E6",
          500: "#347AE2",
          600: "#2B65BC",
          700: "#225196",
          800: "#1A3D71",
          900: "#11284B",
        },
        greyscale: {
          50: "#D3D3D4",
          100: "#C0C0C2",
          200: "#AEAFB2",
          300: "#9B9CA0",
          400: "#898A8F",
          500: "#77787E",
          600: "#64666D",
          700: "#52545C",
          800: "#3F414A",
          900: "#2D2F39",
        },
      },
    },
  },
  plugins: [],
};
export default config;
