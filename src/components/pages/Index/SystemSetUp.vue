<template>
  <n-divider dashed>
    {{ $t('IndexPage.SYSTEM_SET_CONFIG.THEME') }}
  </n-divider>
  <div class="flex justify-center">
    <mode-switch />
  </div>
  <n-divider dashed>
    {{ $t('publicComponents.LANGUAGE') }}
  </n-divider>
  <div class="flex justify-center">
    <locale-dropdown />
  </div>
  <n-divider dashed>
    {{ $t('IndexPage.SYSTEM_SET_CONFIG.NAV_MODE') }}
  </n-divider>
  <div class="flex justify-center">
    <navigation-mode />
  </div>
</template>

<script lang="ts" setup>
import ModeSwitch from "components/public/ModeSwitch/index.vue";
import LocaleDropdown from "components/public/LocaleDropdown/index.vue";
import NavigationMode from "components/public/NavigationMode/index.vue";

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemSetUp"
});
</script>
