<template>
  <n-config-provider>
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle } from 'naive-ui';
</script>