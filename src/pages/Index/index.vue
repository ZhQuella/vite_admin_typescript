<template>
  <system-container
    :an="isAn"
    @an-change="onAnChange"
  >
    <template #menu>
      <syetem-menu :an="isAn" />
    </template>

    <template #tool>
      <system-tool @set-up-open="onSetUpOpen" />
    </template>

    <template #view>
      <system-view />
    </template>
  </system-container>

  <n-drawer
    v-model:show="isOpen"
    :width="400" 
    placement="right"
  >
    <n-drawer-content
      closable
      :title="$t('IndexPage.SYSTEM_SETUP_TITLE')"
    >
      <system-set-up />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import SystemContainer from "components/public/SystemContainer/index.vue";
import SyetemMenu from "components/pages/Index/SystemMenu.vue";
import SystemTool from "components/pages/Index/SystemTool.vue";
import SystemSetUp from "components/pages/Index/SystemSetUp.vue";
import SystemView from "components/pages/Index/SystemView.vue";

const isAn = ref(false);
const onAnChange = (value: boolean) => {
  isAn.value = !value;
};

const isOpen = ref(false);
const onSetUpOpen = () => {
  isOpen.value = true;
};

</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "PageIndex"
});
</script>
