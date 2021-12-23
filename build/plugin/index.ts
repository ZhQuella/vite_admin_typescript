import type { Plugin } from 'vite';

import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';



export const createPlugin = (isBuild: boolean):Plugin[] => {
  
  const vitePlugins = [
    eslintPlugin({
      cache: false,
      exclude: ['script/**/*.js', 'build/**/*.ts']
    }),
    vue()
  ];

  return vitePlugins;

}