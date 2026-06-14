import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://iorl-whatchar.pages.dev',
  integrations: [react()],
  output: 'static',
  prefetch: true
});
