import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
//import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify()
});