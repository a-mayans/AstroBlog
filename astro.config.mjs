import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://a-mayans.github.io",
  base: "/AstroBlog",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});