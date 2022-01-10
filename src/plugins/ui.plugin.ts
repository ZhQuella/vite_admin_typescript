/*
 * @Description: 
 * @Author: 张金龙
 * @Date: 2021-12-22 21:54:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-10 21:15:50
 */

import { App } from 'vue';

import {
  NButton,
  NSwitch,
  NRow,
  NCol
} from "naive-ui";

export default (app: App) => {
  app.component("NButton", NButton);
  app.component("NSwitch", NSwitch);
  app.component("NRow", NRow);
  app.component("NCol", NCol);
};
