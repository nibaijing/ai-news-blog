import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nibaijing.github.io',
  base: '/ai-news-blog',
  output: 'static',
  integrations: [tailwind()],
});
