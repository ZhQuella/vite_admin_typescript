/*
 * @Description: 
 * @Author: Aaron
 * @Date: 2021-12-22 21:54:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 14:53:04
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
  NIcon,
  NDropdown,
  NMenu,
  NSpace,
  NLayoutSider,
  NBreadcrumb,
  NBreadcrumbItem,
  NDrawer,
  NDrawerContent,
  NTooltip
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
  app.component("NDropdown", NDropdown);
  app.component("NMenu", NMenu);
  app.component("NSpace", NSpace);
  app.component("NLayoutSider", NLayoutSider);
  app.component("NBreadcrumb", NBreadcrumb);
  app.component("NBreadcrumbItem", NBreadcrumbItem);
  app.component("NDrawer", NDrawer);
  app.component("NDrawerContent", NDrawerContent);
  app.component("NTooltip", NTooltip);
};
