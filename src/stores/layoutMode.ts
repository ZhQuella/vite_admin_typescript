/*
 * @Description: 导航布局
 * @Author: Aaron
 * @Date: 2021-12-25 15:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 15:00:49
 */

import { defineStore } from 'pinia';

export const useNavModeStore = defineStore('layoutModel', {
  state: () => {
    return {
      layoutModel: localStorage.getItem("layoutModel") || "leftNavigation"
    }
  }
});
