/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F3F6F4",
          100: "#E2EAE5",
          200: "#C5D5CB",
          300: "#9BB5A5",
          400: "#6F917C",
          500: "#4F735C",
          600: "#3B5A47",
          700: "#2F4739",
          800: "#273A30",
          900: "#1F2F27",
          950: "#101A15",
        },
        amber: {
          50: "#FBF7EB",
          100: "#F5EBC8",
          200: "#EBD68E",
          300: "#DFBC52",
          400: "#D4A42A",
          500: "#C48A1C",
          600: "#A96B15",
          700: "#874F14",
          800: "#714017",
          900: "#613619",
        },
        mist: {
          DEFAULT: "#EFE8D8",
          dark: "#E4DAC6",
        },
        honey: {
          DEFAULT: "#F0D9A0",
          soft: "#F5E6C0",
          deep: "#E8C97A",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      translate: ["active", "group-hover"],
      flex: ["hover", "focus"],
      space: ["hover", "focus"],
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slow-zoom": "slowZoom 18s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
};
