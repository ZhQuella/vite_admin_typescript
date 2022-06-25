<template>
  <n-tabs
    v-model:value="value"
    type="card"
    size="small"
  >
    <n-tab
      name="工作台"
      closable
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
import { reactive, ref, nextTick, computed } from "vue";
import { renderIcon } from "util/index";
import { useI18n } from "vue-i18n";

import eventBus from "util/EventBus";

import {
  ReloadOutlined,
  CloseOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  CloseSquareOutlined,
  CloseCircleOutlined
} from '@vicons/antd';

const i18n = useI18n();

const options = computed(() => [{
  label: i18n.t("IndexPage.MENU_LIST.RELOAD"),
  key: 'redload',
  icon: renderIcon(ReloadOutlined),
  disabled: true
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
  key: 'CloseOtherTag',
  icon: renderIcon(CloseSquareOutlined)
},{
  label: i18n.t("IndexPage.MENU_LIST.CLOSE_ALL_TAG"),
  key: 'CloseAllTag',
  icon: renderIcon(CloseCircleOutlined)
}]);

const position = reactive({
  x: 0,
  y: 0
});

const showMenu = ref(false);

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

const onHandleSelect = () => {
  showMenu.value = false;
};

const isFullscreen = ref(false);

const fullscreenComponentName = computed(() => {
  return isFullscreen.value?"icon-fullscreen-exit-outlined":"icon-fullscreen-outlined";
});

const onFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
  eventBus.emit("fullscreen", isFullscreen.value);
};

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SyetemTab"
});
</script>
