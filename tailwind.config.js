/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.tsx",
      "./src/**/*.ts",
  ],
  theme: {
      extend: {
          translate: ["active", "group-hover"],
          flex: ["hover", "focus"],
          space: ["hover", "focus"],
      },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
      extend: {
          display: ['responsive', 'group-hover', 'group-focus'],
      },
  },
};
