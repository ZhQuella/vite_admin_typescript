/*
 * @Description: 
 * @Author: 张金龙
 * @Date: 2021-12-22 21:54:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-22 21:56:57
 */

import { App } from 'vue';

import {
  NButton
} from "naive-ui";

export default (app: App) => {
  app.component("NButton", NButton);
}
