/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // 卡通手写风格字体
        cute: ['Ma Shan Zheng', 'Caveat', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-light': ['Ma Shan Zheng', 'Caveat', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-bold': ['Ma Shan Zheng', 'Caveat', 'cursive', 'Microsoft YaHei', 'sans-serif'],
        'cute-number': ['Ma Shan Zheng', 'Caveat', 'cursive', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
