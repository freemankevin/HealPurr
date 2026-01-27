/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // 卡通手写风格字体
        cute: ['Caveat', 'NotoSerifKhitanSmallScript-Regular', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-light': ['Caveat', 'NotoSerifKhitanSmallScript-Regular', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-bold': ['Caveat', 'NotoSerifKhitanSmallScript-Regular', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-number': ['Caveat', 'NotoSerifKhitanSmallScript-Regular', 'cursive', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
