/*
 * @Description: 全局类型
 * @Author: Aaron
 * @Date: 2022-01-20 13:54:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-20 15:14:07
 */

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
