import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        custom: "30px",
      },
      borderWidth: {
        "6": "6px",
      },
      boxShadow: {
        "make-shadow": "0px 0px 70.18px 1.95px rgba(102, 204, 204, 0.5)",
      },
      colors: {
        "make-green": "rgba(102, 204, 204, 1)",
        "break-red": "rgba(255, 95, 87, 1)",
      },
      fontFamily: {
        sans: ["var(--font-overpass)", ...fontFamily.sans],
        sans2: ["var(--font-roboto)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      // Define custom utilities with explicit types
      const newUtilities = {
        ".make-image-gradient::before": {
          borderImageSource:
            "linear-gradient(273.1deg, #73E7E7 2.56%, #A4F0F0 21.85%, #C6F8F8 33.42%, #FFFFFF 51.26%, #FFFFFF 54.64%, #C6F8F8 74.41%, #A4F0F0 84.53%, #73E7E7 95.14%)",
          borderImageSlice: "1",
          overflow: "hidden",
          clipPath: "border-box",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "border-box",
          outline: "none",
        },
      };
      // Add the custom utilities to Tailwind
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
