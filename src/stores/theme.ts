/*
 * @Description: 
 * @Author: Aaron
 * @Date: 2021-12-25 15:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-20 13:35:34
 */

import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      isDark: localStorage.getItem("theme") === "dark"
    }
  }
});
