<template>
  <div class="flex py-8px pr-10px">
    <n-button
      quaternary
      circle
      @click="onSetUpOpen"
    >
      <template #icon>
        <n-icon><icon-setting-filled /></n-icon>
      </template>
    </n-button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["set-up-open"]);

const onSetUpOpen = () => {
  emit("set-up-open");
};

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SystemTool"
});
</script>
