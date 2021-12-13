import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
      {
        find: "pages",
        replacement: "/src/pages",
      },
      {
        find: "components",
        replacement: "/src/components",
      },
      {
        find: "api",
        replacement: "/src/apis",
      },
      {
        find: "utils",
        replacement: "/src/utils",
      },
      {
        find: "hooks",
        replacement: "/src/hooks",
      },
      {
        find: "types",
        replacement: "/src/interfaces",
      }
    ]
  }
});
