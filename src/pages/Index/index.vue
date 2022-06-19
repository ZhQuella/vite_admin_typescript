<template>
  <system-container>
    <template #menu>
      <syetem-menu />
    </template>
  </system-container>
</template>

<script lang="ts" setup>
import SystemContainer from "components/public/SystemContainer/index.vue";
import SyetemMenu from "components/pages/Index/SystemMenu.vue";

</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "PageIndex"
});
</script>
