/*
 * @Description: 插件相关
 * @Author: Aaron
 * @Date: 2021-12-13 21:37:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-06 21:47:32
 */

import { App } from "vue";
import scriptPlugin from "plugin/script.plugin";
import uiPlugin from "plugin/ui.plugin";
import publicComponents from "plugin/public.components";
import "plugin/style.plugin";

export default (app: App) => {
  scriptPlugin(app);
  uiPlugin(app);
  publicComponents(app);
};
