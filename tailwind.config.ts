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
          "--btn-text-case": "lowercase",
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
        },
      },
    ],
  },
};
export default config;
