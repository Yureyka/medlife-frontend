import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Manrope",
            local: "Manrope",
            src: "./src/assets/fonts/*",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      components: `${path.join(__dirname, "./src/components")}`,
      ui: `${path.join(__dirname, "./src/components/ui")}`,
      common: `${path.join(__dirname, "./src/components/common")}`,
      blocks: `${path.join(__dirname, "./src/components/blocks")}`,
      pages: `${path.join(__dirname, "./src/pages")}`,
      actions: `${path.join(__dirname, "./src/actions")}`,
      reducers: `${path.join(__dirname, "./src/reducers")}`,
      stores: `${path.join(__dirname, "./src/stores")}`,
      assets: `${path.join(__dirname, "./src/assets")}`,
      icons: `${path.join(__dirname, "./src/assets/icons")}`,
      helpers: `${path.join(__dirname, "./src/helpers")}`,
      api: `${path.join(__dirname, "./src/api")}`,
    },
  },
});
