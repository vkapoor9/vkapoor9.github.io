import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // User-site URL on GitHub Pages. Replace with a custom domain later.
  site: 'https://vkapoor9.github.io',
  integrations: [react(), mdx(), sitemap()],
  // Old slug for the Moofmail case study. Keeps existing links working.
  redirects: {
    '/projects/icloud-mcp': '/projects/moofmail',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
