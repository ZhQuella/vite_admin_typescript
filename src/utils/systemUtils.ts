/*
 * @Description: 系统通用工具
 * @Author: 张金龙
 * @Date: 2021-12-25 15:10:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-25 15:12:02
 */

export const getSrc = (name: string) => {
  const path = `/src/assets/images/${name}`
  const modules = import.meta.globEager('/src/assets/images/*')
  return modules[path].default
}
