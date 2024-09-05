import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  server: {
    open: false,
    host: "0.0.0.0",
    port: 80,
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@hooks",
        replacement: "/src/hooks",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@utils",
        replacement: "/src/utils",
      },
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  build: {
    target: "ES2022",
  },
});
