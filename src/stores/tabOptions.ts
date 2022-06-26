import { defineStore } from 'pinia';

export const useTabOptionsStore = defineStore('locale', {
  state: () => {
    return {
      tabOptions: sessionStorage.getItem("tabs") || '[{ "tab": "工作台", "name": "WorkBench", "closable": false }]'
    }
  }
});
