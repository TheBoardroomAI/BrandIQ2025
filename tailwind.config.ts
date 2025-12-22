import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandiq: {
          green: '#00b159',
          purple: '#a0218d',
          blue: '#007db1',
          orange: '#f3901d',
          gray: '#696a6d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
