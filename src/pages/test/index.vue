<template>
  {{ num }}
  {{ props.height }}
  <n-input v-model:value="num" />
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const num = ref("");

const props = defineProps({
  height: {
    type: Number,
    default: 0
  }
})

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WorkBench"
});
</script>
