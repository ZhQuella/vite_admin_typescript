<template>
  <div class="system-container-wrap">
    <div
      v-if="layoutMode === 'leftNavigation'"
      v-show="!isFullscreen"
      class="menu-container duration-350 overflow-hidden basis-210px -enter-x"
      :class="classNames"
    >
      <div class="max-w-70px duration-350 p-5px flex">
        <img
          :src="getSrc(theme?'logo/dark-logo.png':'logo/light-logo.png')"
          class="block w-full"
        >
        <h1
          v-if="!props.an"
          class="title font-bold absolute left-70px"
        >
          AzAadmin
        </h1>
      </div>
      <slot
        name="menu"
      />
    </div>
    <div class="continer-wrap flex w-full flex-col">
      <div
        v-show="!isFullscreen"
        class="header-container flex -enter-y"
      >
        <div class="flex pl-10px">
          <div class="flex">
            <n-button
              v-if="layoutMode === 'leftNavigation'"
              text
              class="my-4px mr-12px -enter-y"
              @click="onAnChange"
            >
              <template #icon>
                <n-icon>
                  <component
                    :is="menuIconName"
                    class="text-24px"
                  />
                </n-icon>
              </template>
            </n-button>
            <div class="py-16px">
              <n-breadcrumb separator=">">
                <n-breadcrumb-item>
                  北京总行
                </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div
            v-if="layoutMode === 'topNavigation'"
            class="flex px-25px py-4px -enter-y"
          >
            <slot name="menu" />
          </div>
        </div>
        <div>
          <slot name="tool" />
        </div>
      </div>
      <div
        class="view-container enter-y flex-1"
      >
        <slot name="view" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits, onMounted, ref } from "vue";
import { getSrc } from "util/systemUtils";
import { useThemeStore } from "store/theme";
import { useNavModeStore } from "store/layoutMode";

import eventBus from "util/EventBus";

const emit = defineEmits(['an-change']);

const themeStore = useThemeStore();
const theme = computed(() => {
  return themeStore.isDark
});

const layoutModeStore = useNavModeStore();
const layoutMode = computed(() => {
  return layoutModeStore.layoutModel
});

const props = defineProps({
  an: {
    type: Boolean,
    default: false
  }
});

const classNames = computed(() => {
  return [{
    min: props.an
  }]
});

const onAnChange = () => {
  emit("an-change", props.an);
};

const menuIconName = computed(() => {
  return props.an?"IconMenuUnfoldOutlined":"IconMenuFoldOutlined";
});


const isFullscreen = ref(false);

const onFullscreen = (value: boolean) => {
  isFullscreen.value = value;
};

onMounted(() => {
  eventBus.on("fullscreen", onFullscreen);
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemContainer"
});
</script>
