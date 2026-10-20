// AI生成
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F33',
          light: '#1a3a5c',
          dark: '#061525',
        },
        accent: {
          DEFAULT: '#19C3B1',
          light: '#3ddbc9',
          dark: '#0f9a8a',
        },
        coral: {
          DEFAULT: '#FF6B5E',
          light: '#ff8a7f',
          dark: '#e54a3d',
        },
        surface: '#F7F8FA',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Serif 4"', 'serif'],
        sans: ['Inter', '"Noto Sans SC"', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(11, 31, 51, 0.08)',
        'card-hover': '0 8px 24px rgba(11, 31, 51, 0.12)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
