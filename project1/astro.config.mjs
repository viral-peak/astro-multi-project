import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [react()],
  /* Hybrid: Most of the page will be SSG by default unless specified to use SSR */
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
