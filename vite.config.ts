import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build — no Cloudflare Worker, no SSR runtime.
// TanStack Start prerenders an index shell and the client takes over
// at runtime. Output is fully static and deployable to Netlify / any
// static host.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
    pages: [],
  },
});
