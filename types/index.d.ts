/*
 * @Description: 全局类型
 * @Author: Aaron
 * @Date: 2022-01-20 13:54:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 16:43:38
 */

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export interface tabOption {
  tab: string,
  name: string,
  closable: boolean
}

type contextMenuType = 'redload' | 'closeTag' | 'closeLeftTag' | 'closeRightTag' | 'closeOtherTag' | 'closeAllTag';

type tabMenuMethod = Record<contextMenuType, Fn>;
