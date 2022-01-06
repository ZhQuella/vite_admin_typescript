/*
 * @Description: 
 * @Author: 张金龙
 * @Date: 2021-12-22 21:54:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-06 21:45:08
 */

import { App } from 'vue';

import {
  NButton,
  NSwitch
} from "naive-ui";

export default (app: App) => {
  app.component("NButton", NButton);
  app.component("NSwitch", NSwitch);
};
