<template>
  <n-switch
    size="medium"
    :rail-style="railStyle"
  >
    <template #checked>
      <az-svg-icon
        icon-class="dark"
        color="#FFA500"
      />
    </template>
    <template #unchecked>
      <az-svg-icon
        icon-class="light" 
        color="#FFA500"
      />
    </template>
  </n-switch>
</template>

<script lang="ts" setup>
const railStyle = ({ focused, checked }: { focused: boolean, checked: boolean }) => {
  const style = {
    background: "#00b067",
    boxShadow: "0 0 0 2px #00b067"
  };
  if (checked) {
    style.background = '#000';
    style.boxShadow = '0 0 0 2px #000';
  }
  return style
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ModeSwitch"
})
</script>