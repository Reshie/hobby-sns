import type { Config } from "tailwindcss";
// import { colors } from "@/app/ui/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          'pale': '#FCFDFF',
          'nav': '#F7F8FF',
          'post': '#FCFDFF',
          DEFAULT: '#3A3D92',
        },
        'like': '#FF5771',
        'crown': '#D78B33',
        'text1': '#131313',
        'text2': '#5E5E5E',
        'text3': '#90989A',
        'border': '#DEDEDE',
        'group': '#EEEEEE',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
