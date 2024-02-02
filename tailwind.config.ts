import type { Config } from "tailwindcss";
import themes from "./themes";
import daisyThemes from "daisyui/src/theming/themes";
import { pick } from "lodash";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      ...themes, // This is the original themes array
      {
        customblack: {
          ...daisyThemes["[data-theme=black]"],
          ...pick(daisyThemes["[data-theme=coffee]"], [
            "primary",
            "secondary",
            "accent",
          ]),
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        },
      },

      {
        customlight: {
          ...daisyThemes["[data-theme=lofi]"],
          ...pick(daisyThemes["[data-theme=coffee]"], [
            "primary",
            "secondary",
            "accent",
          ]),
          "--btn-text-case": "lowercase",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        },
      },
    ],
  },
};
export default config;
