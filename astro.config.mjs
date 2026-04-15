import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-ai-blog.vercel.app',
  output: 'static',
  integrations: [tailwind()],
});
