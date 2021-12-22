/*
 * @Description: axios拦截器
 * @Author: 张金龙
 * @Date: 2021-12-13 22:31:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-22 22:21:17
 */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.baidu.com/"
});

instance.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
