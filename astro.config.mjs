// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fredericrisling.github.io',
  base: '/woic',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
        },
      },
    }),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});