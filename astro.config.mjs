import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sellyourstufftoday.bid',
  integrations: [
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  prefetch: true,
  build: {
    assets: '_compiled',
    inlineStylesheets: 'always',
  },
});
