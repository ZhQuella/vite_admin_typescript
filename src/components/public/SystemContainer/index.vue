<template>
  <div class="system-container-wrap">
    <div
      class="menu-container duration-350 overflow-hidden basis-210px -enter-x"
      :class="classNames"
    >
      <div class="max-w-70px duration-350 p-5px flex">
        <img
          :src="getSrc(theme?'logo/dark-logo.png':'logo/light-logo.png')"
          class="block w-full"
        >
        <h1
          v-if="!isMin"
          class="title font-bold absolute left-70px"
        >
          AzAadmin
        </h1>
      </div>
      <slot
        v-if="true"
        name="menu"
      />
    </div>
    <div class="continer-wrap">
      <div class="header-container flex -enter-y">
        <div class="flex">
          <div class="flex">
            <n-button
              text
              class="my-4px mx-12px"
              @click="isMin = !isMin"
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
                <n-breadcrumb-item>
                  天津分行
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                  平山道支行
                </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div
            v-if="false"
            class="flex px-25px py-6px"
          >
            131
            <slot name="menu" />
          </div>
        </div>
        <div>
          4564
        </div>
      </div>
      <div class="view-container enter-y">
        切换切换切换切换切换切换切换
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//  ! 未完成
import { ref, computed } from "vue";
import { getSrc } from "util/systemUtils";
import { useThemeStore } from "store/theme";

const themeStore = useThemeStore();
const theme = computed(() => {
  return themeStore.isDark
});

const isMin = ref(true);

const classNames = computed(() => {
  return [{
    min: isMin.value
  }]
});

const menuIconName = computed(() => {
  return isMin.value?"IconMenuUnfoldOutlined":"IconMenuFoldOutlined";
});

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemContainer"
});
</script>
