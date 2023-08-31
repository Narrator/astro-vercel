import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  base: '/kau',
  output: "server",
  adapter: vercel(),
  build: {
    assets: '_kau'
  }
});