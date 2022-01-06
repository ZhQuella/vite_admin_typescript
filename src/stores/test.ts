/*
 * @Description: 
 * @Author: 张金龙
 * @Date: 2021-12-25 15:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-25 16:21:30
 */

import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  }
})
