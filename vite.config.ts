import solid from "solid-start/vite";
import { defineConfig } from "vite";
import cloudflare from "solid-start-cloudflare-workers";

export default defineConfig(() => {
  return {
    plugins: [solid({ 
      ssr: true,
      adapter: cloudflare({ envPath: true }),
     })],
  };
});
