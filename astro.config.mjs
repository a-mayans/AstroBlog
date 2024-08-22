import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://a-mayans.github.io",
  base: "/AstroBlog",

  //>> internalización
  i18n: ({
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // redirectToDefaultLocale: true,
      prefixDefaultLocale: true
    }
  })

  // output: "server",
  // adapter: node({
  //   mode: "standaLone"
  // })
});