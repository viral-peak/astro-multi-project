import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [react()],
  output:
    "hybrid" /* Hybrid: Most of the page will be SSG by default unless specified to use SSR */,
  adapter: node({
    mode: "standalone",
  }),
});
