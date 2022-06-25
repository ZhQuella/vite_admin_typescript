<template>
  <div
    :style="fullStyle"
    class="items-stretch h-full overflow-hidden flex flex-col"
  >
    <syetem-tab />
    <n-scrollbar>
      <router-view :height="height" />
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import SyetemTab from "components/pages/Index/SyetemTab.vue";
//  onFullResize
import { addEventResize } from "util/ElementResize";

const height = ref(0);
const fullStyle = computed(() => {
  return {
    height: `${height.value}px`
  }
});

const onFullResize = () => {
  const doc = document.body;
  console.log(doc.clientHeight);
  height.value = doc.clientHeight - 50;
};

onMounted(() => {
  const doc = document.documentElement;
  addEventResize(doc, onFullResize);
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemView"
});
</script>
