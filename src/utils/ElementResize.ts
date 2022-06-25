/*
 * @Description: 元素更改
 * @Author: Aaron
 * @Date: 2022-01-06 22:35:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 19:25:39
 */

import ResizeObserver from "resize-observer-polyfill";

console.log(ResizeObserver, "44564");

const resizeHandler = function (entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  }
};

export const addEventResize = (node, fun) => {
  if (!node.__resizeListeners__) {
    node.__resizeListeners__ = [];
    node.__ro__ = new ResizeObserver(resizeHandler);
    node.__ro__.observe(node);
  }
  node.__resizeListeners__.push(fun);
};

export const removeResizeListener = (node, fun) => {
  if (!node || !node.__resizeListeners__) return;
  node.__resizeListeners__.splice(node.__resizeListeners__.indexOf(fun), 1);
  if (!node.__resizeListeners__.length) {
    node.__ro__.disconnect();
  }
};
