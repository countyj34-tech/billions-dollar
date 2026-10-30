// @lovable.dev/vite-tanstack-config already includes the following â€” do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

const buildEnv = loadEnv("production", process.cwd(), "");
const supabaseUrl = buildEnv.VITE_SUPABASE_URL || buildEnv.SUPABASE_URL || "";
const supabasePublishableKey =
  buildEnv.VITE_SUPABASE_PUBLISHABLE_KEY ||
  buildEnv.SUPABASE_PUBLISHABLE_KEY ||
  buildEnv.SUPABASE_PUBLISHABLE_KEYS ||
  "";

export default defineConfig({
  react: {
    babel: {
      development: false,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    // Let Nitro's netlify preset write to .netlify/functions-internal (do NOT point
    // Netlify functions at .output/server â€” that re-bundles and breaks on tslib).
    preset: "netlify",
  },
  vite: {
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(supabaseUrl),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(supabasePublishableKey),
    },
    oxc: {
      jsx: {
        development: false,
      },
    },
    ssr: {
      external: ["nodemailer"],
    },
    build: {
      rolldownOptions: {
        external: ["nodemailer"],
      },
    },
  },
});