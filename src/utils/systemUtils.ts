/*
 * @Description: 系统通用工具
 * @Author: Aaron
 * @Date: 2021-12-25 15:10:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-20 14:42:19
 */
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";

export const getSrc = (name: string) => {
  const path = `/src/assets/images/dynamic/${name}`
  const modules = import.meta.globEager('/src/assets/images/dynamic/**/*')
  return modules[path].default
}

export const setTheme:Fn = (scopeName: string) => {
  toggleTheme({
    scopeName,
  });
};
