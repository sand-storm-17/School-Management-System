import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        color1: "#C3EBFA",
        color1Light: "#EDF9FD",
        color2: "#CFCEFF",
        color2Light: "#F1F0FF",
        color3: "#FAE27C",
        color3Light: "#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
