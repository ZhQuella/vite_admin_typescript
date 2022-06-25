<template>
  <div class="flex navigation-model-wrap">
    <n-tooltip trigger="hover">
      <template #trigger>
        <div
          class="p-2px w-70px flex navigation-model-item mr-20px cursor-pointer duration-350"
          :class="[{
            active: layoutModeStore.layoutModel === 'leftNavigation'
          }]"
          @click="onNavigationChange('leftNavigation')"
        >
          <div class="principal h-60px w-20px" />
          <div class="h-60px w-50px">
            <div class="h-20px principal" />
            <div class="view h-40px" />
          </div>
        </div>
      </template>
      {{ $t("IndexPage.SYSTEM_SET_CONFIG.NAV_MODE_LEFT") }}
    </n-tooltip>

    <n-tooltip trigger="hover">
      <template #trigger>
        <div
          class="p-2px w-70px navigation-model-item cursor-pointer duration-350"
          :class="[{
            active: layoutModeStore.layoutModel === 'topNavigation'
          }]"
          @click="onNavigationChange('topNavigation')"
        >
          <div class="h-20px principal" />
          <div class="view h-40px" />
        </div>
      </template>
      {{ $t("IndexPage.SYSTEM_SET_CONFIG.NAV_MODE_TOP") }}
    </n-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useNavModeStore } from "store/layoutMode";

const layoutModeStore = useNavModeStore();

const onNavigationChange = (mode: string) => {
  layoutModeStore.layoutModel = mode;
  localStorage.setItem("layoutModel", mode);
};

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationMode"
});
</script>
