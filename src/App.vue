<template>
  <n-config-provider :theme-overrides="darkTheme">
    <n-button>123</n-button>
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle , darkTheme } from 'naive-ui';
</script>