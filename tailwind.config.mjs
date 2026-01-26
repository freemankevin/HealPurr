/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // 卡通手写风格字体
        cute: ['Fredoka', 'Comic Neue', 'Varela Round', 'Quicksand', 'Nunito', 'Baloo 2', 'ZCOOL QingKe HuangYou', 'Ma Shan Zheng', 'cursive', 'sans-serif'],
        'cute-light': ['Patrick Hand', 'Kalam', 'Comic Neue', 'Ma Shan Zheng', 'cursive', 'sans-serif'],
        'cute-bold': ['Fredoka', 'Baloo 2', 'ZCOOL QingKe HuangYou', 'Comic Neue', 'cursive', 'sans-serif'],
        'cute-number': ['Fredoka', 'Quicksand', 'Nunito', 'Varela Round', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
