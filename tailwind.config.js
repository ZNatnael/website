/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
