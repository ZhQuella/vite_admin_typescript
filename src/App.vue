<template>
  <n-config-provider :theme="null">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui';
</script>