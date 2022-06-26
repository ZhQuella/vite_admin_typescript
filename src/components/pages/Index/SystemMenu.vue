<template>
  <n-space vertical>
    <n-menu
      ref="menuInstRef"
      v-model:value="selectedKeyRef"
      :collapsed="collapsed"
      :options="menuOptions"
      :root-indent="10"
      :indent="10"
      :mode="mode"
      @update:value="onMenuUpdateValue"
    />
  </n-space>
</template>

<script lang="ts" setup>
import { h, defineProps, computed, onMounted, ref } from "vue";
import type { MenuOption, MenuInst } from 'naive-ui';
import * as iconResult from '@vicons/antd';
import { useNavModeStore } from "store/layoutMode";
import { useRoute, useRouter } from "vue-router";
import eventBus from "util/EventBus";

const selectedKeyRef = ref('');
const menuInstRef = ref<MenuInst | null>(null);

const route = useRoute();
const router = useRouter();
const props = defineProps({
  an: {
    type: Boolean,
    default: false
  }
});

const layoutModeStore = useNavModeStore();
const layoutMode = computed(() => {
  return layoutModeStore.layoutModel
});
const mode = computed(() => {
  return layoutMode.value === "topNavigation"?"horizontal":undefined
});

const collapsed = computed(() => {
  if(layoutMode.value === "topNavigation" ){
    return false;
  }
  return props.an;
});

//  ! 未完成
const menuOptions: MenuOption[] = [{
  label: '测试页面',
  key: 'hear-the-wind-sing1',
  icon: () => {
    return h(iconResult['WechatFilled'])
  },
  children: [{
    label: "工作台",
    key: 'WorkBench',
    icon: () => {
      return h(iconResult['AudioTwotone'])
    }
  },{
    label: "测试页面1",
    key: 'TestPage1',
    icon: () => {
      return h(iconResult['AudioTwotone'])
    }
  },{
    label: "测试页面2",
    key: 'TestPage2',
    icon: () => {
      return h(iconResult['AudioTwotone'])
    }
  }]
}];

const selectAndExpand = async (key: string) => {
  console.log(key);
  selectedKeyRef.value = key;
  menuInstRef.value?.showOption(key);
};

const onMenuUpdateValue = (menuKey: string, item: MenuOption) => {
  eventBus.emit("openPage", item);
  router.push({ name: menuKey });
};

onMounted(() => {
  let name = route.name as string;
  selectAndExpand(name);
  eventBus.on("changePage", selectAndExpand);
});

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemMenu"
});
</script>
