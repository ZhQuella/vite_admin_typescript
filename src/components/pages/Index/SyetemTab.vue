<template>
  <n-tabs
    v-model:value="tabActiveValue"
    type="card"
    size="small"
    :on-update:value="onTabsUpdate"
  >
    <n-tab
      v-for="(item, index) in openTabLists"
      :key="index"
      :name="item.name"
      :tab="item.tab"
      :closable="item.closable"
      @contextmenu="onHandleContextMenu"
    />
    <template #suffix>
      <div class="flex pt-2px">
        <n-button
          quaternary
          size="small"
        >
          <n-icon><icon-reload-outlined class="text-18px" /></n-icon>
        </n-button>
        <n-dropdown
          trigger="hover"
          :options="options"
          @select="onHandleSelect"
        >
          <n-button
            quaternary
            size="small"
          >
            <n-icon>
              <icon-down-outlined class="text-18px" />
            </n-icon>
          </n-button>
        </n-dropdown>
        <n-button
          quaternary
          size="small"
          class="mr-5px"
          @click="onFullscreen"
        >
          <n-icon>
            <component
              :is="fullscreenComponentName"
              class="text-18px"
            />
          </n-icon>
        </n-button>
      </div>
    </template>
  </n-tabs>

  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    size="small"
    :x="position.x"
    :y="position.y"
    :options="options"
    :show="showMenu"
    :on-clickoutside="onClickoutside"
    @select="onHandleSelect"
  />
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick, computed, onMounted } from "vue";
import { renderIcon } from "util/index";
import { useI18n } from "vue-i18n";
import type { MenuOption } from 'naive-ui';
import eventBus from "util/EventBus";
import { tabOption } from "types/index";
import { useRouter, useRoute } from "vue-router";
import { useTabOptionsStore } from "store/tabOptions";
import { useTabs } from "hooks/useTabs";
import { contextMenuType } from "types/index";

import {
  ReloadOutlined,
  CloseOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  CloseSquareOutlined,
  CloseCircleOutlined
} from '@vicons/antd';

const contextmenuMethod = useTabs();
const router = useRouter();
const route = useRoute();
const i18n = useI18n();
const tabStore = useTabOptionsStore();
const tabActiveValue = ref("");
const openTabLists: tabOption[] = reactive([]);
const options = computed(() => [{
  label: i18n.t("IndexPage.MENU_LIST.RELOAD"),
  key: 'redload',
  icon: renderIcon(ReloadOutlined)
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_TAG"),
  key: 'closeTag',
  icon: renderIcon(CloseOutlined)
},{
  type: 'divider',
  key: 'd1'
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_LEFT_TAG"),
  key: 'closeLeftTag',
  icon: renderIcon(VerticalLeftOutlined)
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_RIGHT_TAG"),
  key: 'closeRightTag',
  icon: renderIcon(VerticalRightOutlined)
},{
  type: 'divider',
  key: 'd1'
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_OTHER_TAG"),
  key: 'closeOtherTag',
  icon: renderIcon(CloseSquareOutlined)
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_ALL_TAG"),
  key: 'closeAllTag',
  icon: renderIcon(CloseCircleOutlined)
}]);
const position = reactive({
  x: 0,
  y: 0
});
const showMenu = ref(false);
const isFullscreen = ref(false);

const onHandleContextMenu = async (e: MouseEvent) => {
  e.preventDefault();
  const { clientX: x, clientY: y } = e;
  showMenu.value = false;
  await nextTick();
  position.x = x;
  position.y = y;
  showMenu.value = true;
};

const onClickoutside = () => {
  showMenu.value = false;
};
const onHandleSelect = (value: contextMenuType) => {
  contextmenuMethod[value]();
  showMenu.value = false;
};

const fullscreenComponentName = computed(() => {
  return isFullscreen.value?"icon-fullscreen-exit-outlined":"icon-fullscreen-outlined";
});

const onFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
  eventBus.emit("fullscreen", isFullscreen.value);
};

const onOpenPage = (option: MenuOption) => { 
  const { key: name, label: tab } = option;
  const index = openTabLists.map(el => el.name).findIndex((el) => el === name);
  if (index === -1) { 
    openTabLists.push({ tab , name, closable: true } as tabOption);
  }
  tabActiveValue.value = name as string;
  const value = JSON.stringify(openTabLists);
  tabStore.tabOptions = value;
  sessionStorage.setItem("tabs", value);
};

const onTabsUpdate = (name: string) => {
  router.push({ name });
  tabActiveValue.value = name;
  eventBus.emit("changePage", name);
};

const init = async () => {
  const tabs = tabStore.tabOptions ?
    JSON.parse(tabStore.tabOptions) as tabOption[] :
    [{ "tab": "工作台", "name": "WorkBench", "closable": false }];
  openTabLists.push(...tabs);
  tabActiveValue.value = route.name as string;
};

onMounted(() => {
  init();
  eventBus.on("openPage", onOpenPage);
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SyetemTab"
});
</script>
