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
        'primary-blue': '#0063B4',
        'secondary-turquoise': '#00B3C6',
        'light-gray': '#F4F4F4',
        'dark-gray': '#2D2D2D',
      },
    },
  },
  plugins: [],
};
export default config;
