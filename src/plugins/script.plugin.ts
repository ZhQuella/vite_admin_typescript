/*
 * @Description: js相关插件
 * @Author: Aaron
 * @Date: 2021-12-13 21:38:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-19 12:08:01
 */
import { App } from "vue";

import router from "@/routers";
import store from "@/stores";
import vueI18n from '@/assets/language';

export default (app: App) => {
  //  路由
  app.use(router);
  //  状态存储
  app.use(store);
  //  多语言
  app.use(vueI18n);
};
