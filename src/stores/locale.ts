/*
 * @Description: 语言
 * @Author: Aaron
 * @Date: 2022-01-20 13:35:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 14:56:14
 */

import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
  state: () => {
    return {
      locale: localStorage.getItem("locale") || "ch"
    }
  }
});

