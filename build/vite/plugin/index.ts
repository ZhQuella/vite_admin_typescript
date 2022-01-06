import type { Plugin } from 'vite';

import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';
import viteSvgIcons from 'vite-plugin-svg-icons';

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
    })
  ];

  return vitePlugins;

}
