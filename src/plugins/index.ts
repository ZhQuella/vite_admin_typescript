/*
 * @Description: 插件相关
 * @Author: Aaron
 * @Date: 2021-12-13 21:37:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 21:54:06
 */

import { App } from "vue";
import scriptPlugin from "./script.plugin";

export default (app: App) => {
  scriptPlugin(app);
};
