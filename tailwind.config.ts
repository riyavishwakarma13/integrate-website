import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CD4050",
      },
      boxShadow: {
        normal: "6px 9px 39px 3px rgba(0, 0, 0, 0.2)",
        less: "6px 9px 39px 3px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
