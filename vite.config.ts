import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';
import { viteThemePlugin } from 'vite-plugin-theme';

export default defineConfig({
  plugins: [
    eslintPlugin({
      cache: false,
      exclude: ['script/**/*.js']
    }),
    vue(),
    viteThemePlugin({
      injectTo: 'head',
      colorVariables: []
    })
  ],
  css: {
		preprocessorOptions: {
			scss: {
        additionalData: '@import "style/base/_var.scss";'
			}
		}
	},
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src"
      },
      {
        find: "pages",
        replacement: "/src/pages"
      },
      {
        find: "components",
        replacement: "/src/components"
      },
      {
        find: "api",
        replacement: "/src/apis"
      },
      {
        find: "utils",
        replacement: "/src/utils"
      },
      {
        find: "hooks",
        replacement: "/src/hooks"
      },
      {
        find: "types",
        replacement: "/src/interfaces"
      },
      {
        find: "plugin",
        replacement: "/src/plugins"
      },
      {
        find: "style",
        replacement: "/src/styles"
      }
    ]
  }
});
