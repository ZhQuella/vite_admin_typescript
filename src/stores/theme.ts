/*
 * @Description: 主题
 * @Author: Aaron
 * @Date: 2021-12-25 15:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 14:56:20
 */

import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      isDark: localStorage.getItem("theme") === "dark"
    }
  }
});
