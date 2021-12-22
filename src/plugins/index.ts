/*
 * @Description: 插件相关
 * @Author: Aaron
 * @Date: 2021-12-13 21:37:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-22 22:04:20
 */

import { App } from "vue";
import scriptPlugin from "plugin/script.plugin";
import uiPlugin from "plugin/ui.plugin";
import "plugin/style.plugin";

export default (app: App) => {
  scriptPlugin(app);
  uiPlugin(app);
};
