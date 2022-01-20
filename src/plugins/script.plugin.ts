/*
 * @Description: js相关插件
 * @Author: Aaron
 * @Date: 2021-12-13 21:38:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-06 21:44:59
 */
import { App } from "vue";

import router from "@/routers";
import store from "@/stores";

export default (app: App) => {
  //  路由
  app.use(router);
  //  状态存储
  app.use(store);
};
