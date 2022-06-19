/*
 * @Description: icon
 * @Author: Aaron
 * @Date: 2022-01-20 12:38:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-19 18:26:48
 */

import { App } from 'vue';

import { 
  WechatFilled, 
  TwitterOutlined, 
  GithubFilled, 
  AlipayOutlined, 
  UserOutlined, 
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@vicons/antd';

export default (app: App) => {
  app.component("IconWechat", WechatFilled);
  app.component("IconTwitter", TwitterOutlined);
  app.component("IconGithub", GithubFilled);
  app.component("IconAlipay", AlipayOutlined);
  app.component("IconUserOut", UserOutlined);
  app.component("IconLockOut", LockOutlined);
  app.component("IconEyeOut", EyeOutlined);
  app.component("IconEyeInvisible", EyeInvisibleOutlined);
  app.component("IconMenuFoldOutlined", MenuFoldOutlined);
  app.component("IconMenuUnfoldOutlined", MenuUnfoldOutlined);
};
