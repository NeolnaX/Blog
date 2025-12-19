/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          // 中文字体 - 优先使用本地系统字体
          "PingFang SC",
          "Microsoft YaHei",
          "Noto Sans SC",
          // 系统字体回退
          "system-ui",
          "-apple-system",
          "sans-serif",
          ...defaultTheme.fontFamily.sans
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
