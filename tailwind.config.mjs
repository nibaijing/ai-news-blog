/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0E17',
        electric: '#00D1FF',
        navy: {
          900: '#0A0E17',
          800: '#141B2D',
          700: '#1E293B',
        },
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        }
      },
    },
  },
  plugins: [],
}
