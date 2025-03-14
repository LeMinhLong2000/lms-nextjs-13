const { withUt } = require("uploadthing/tw");

import type { Config } from "tailwindcss";

const config: Config = withUt({
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
});
export default config;
