<template>
  <n-space vertical>
    <n-menu
      :collapsed="true"
      :options="menuOptions"
      :root-indent="10"
      :indent="10"
    />
  </n-space>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { NEllipsis } from 'naive-ui'
import type { MenuOption } from 'naive-ui';
import * as iconResult from '@vicons/antd';
//  ! 未完成
const menuOptions: MenuOption[] = [{
  label: '且听风吟1',
  key: 'hear-the-wind-sing1',
  icon: () => {
    return h(iconResult['WechatFilled'])
  },
  children: [{
    label: () => h(NEllipsis, null, { default: () => '电灯熄灭 物换星移 泥牛入海' }),
    key: 'hear-the-wind-sing2',
    icon: () => {
      return h(iconResult['AppstoreAddOutlined'])
    },
    children: [{
      label: () => h(NEllipsis, null, { default: () => '泥牛入海 145' }),
      key: 'hear-the-wind-sing3',
      icon: () => {
        return h(iconResult['AudioTwotone'])
      }
    },{
      label: () => h(NEllipsis, null, { default: () => '泥牛入海 145' }),
      key: 'hear-the-wind-sing4',
      icon: () => {
        return h(iconResult['AudioTwotone'])
      }
    },{
      label: () => h(NEllipsis, null, { default: () => '泥牛入海 145' }),
      key: 'hear-the-wind-sing5',
      icon: () => {
        return h(iconResult['AudioTwotone'])
      }
    }]
  }]
}];
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemMenu"
});
</script>
