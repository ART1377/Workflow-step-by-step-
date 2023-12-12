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
      colors: {
        reject: "var(--reject)",
        success: "var(--success)",
        upload: "var(--upload)",
        "main-gray": "var(--main-gray)",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
