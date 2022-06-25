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
import { computed, onMounted, ref, nextTick } from "vue";
import SyetemTab from "components/pages/Index/SyetemTab.vue";
import { addEventResize } from "util/ElementResize";
import eventBus from "util/EventBus";

const height = ref(0);
const fullStyle = computed(() => {
  return {
    height: `${height.value}px`
  }
});

const onFullResize = async () => {
  await nextTick();
  const headerDom = document.querySelector(".header-container");
  const headerClientHeight = headerDom?.clientHeight || 0;
  const doc = document.body;
  height.value = doc.clientHeight - headerClientHeight;
};

onMounted(() => {
  eventBus.on("fullscreen", onFullResize);
});

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
