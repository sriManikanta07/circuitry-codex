import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build — no Cloudflare Worker, no SSR runtime.
// TanStack Start prerenders a single shell HTML and the client takes over
// at runtime. Output is fully static (dist/client) and deployable to Netlify
// or any static host.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: { outputPath: "/" },
    },
  },
});
