import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';

import { createResolve, createCss } from "./build/vite/other/index";
import { createPlugin } from './build/vite/plugin/index';

export default ({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();
  const env = loadEnv(mode, root);
  const isBuild = command === 'build';

  return {
    plugins: createPlugin(isBuild),
    css: createCss(),
    resolve: createResolve()
  }
};
