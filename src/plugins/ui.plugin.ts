/*
 * @Description: 
 * @Author: 张金龙
 * @Date: 2021-12-22 21:54:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-20 12:12:09
 */

import { App } from 'vue';

import {
  NButton,
  NSwitch,
  NRow,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NCheckbox,
  NDivider,
  NIcon 
} from "naive-ui";

export default (app: App) => {
  app.component("NButton", NButton);
  app.component("NSwitch", NSwitch);
  app.component("NRow", NRow);
  app.component("NCol", NCol);
  app.component("NForm",NForm);
  app.component("NFormItem",NFormItem);
  app.component("NInput",NInput);
  app.component("NCheckbox", NCheckbox);
  app.component("NDivider",NDivider);
  app.component("NIcon", NIcon);
};
