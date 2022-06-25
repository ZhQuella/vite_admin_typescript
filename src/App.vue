<template>
  <n-config-provider :theme="theme">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui';
import { useThemeStore } from "store/theme";
import { setTheme } from "util/systemUtils";

const themeStore = useThemeStore();

const theme = computed(() => {
  return themeStore.isDark?darkTheme:null;
});

const initTheme = () => {
  const value = theme.value?"dark":"light";
  setTheme(`theme-${value}`);
};

initTheme();
</script>