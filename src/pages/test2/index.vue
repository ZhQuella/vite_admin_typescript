<template>
  <n-button @click="num++">
    {{ num }}
  </n-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const num = ref(0);
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TestPage2"
});
</script>
