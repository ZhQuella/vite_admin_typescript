import type { Plugin } from 'vite';

import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor";
import windiCSS from 'vite-plugin-windicss';

import path from 'path'; 

export const createPlugin = (isBuild: boolean):Plugin[] => {
  
  const vitePlugins = [
    eslintPlugin({
      cache: false,
      exclude: ['build/**/*.js', 'build/**/*.ts'],
      throwOnWarning: false,
      fix: true
    }),
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    themePreprocessorPlugin({
      scss: {
        arbitraryMode: false,
        multipleScopeVars: [
          {
            scopeName: "theme-light",
            path: path.resolve("src/styles/base/theme/theme-light.scss"),
          },
          {
            scopeName: "theme-dark",
            path: path.resolve("src/styles/base/theme/theme-dark.scss"),
          }
        ],
        extract: false
      },
    }),
    windiCSS()
  ];

  return vitePlugins;

}
