<template>
  <n-switch
    size="medium"
    :rail-style="railStyle"
    :value="theme"
    :on-update:value="onThemeChange"
  >
    <template #checked>
      <az-svg-icon
        icon-class="light" 
        color="#FFA500"
      />
    </template>
    <template #unchecked>
      <az-svg-icon
        icon-class="dark"
        color="#FFA500"
      />
    </template>
  </n-switch>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useThemeStore } from "store/theme";

const themeStore = useThemeStore();

const theme = computed(() => {
  return themeStore.isDark
});

const onThemeChange = (value: boolean) => {
  themeStore.isDark = !themeStore.isDark ;
};

themeStore.$subscribe((mutation, state) => {
  const value = state.isDark?"dark":"";
  localStorage.setItem("theme",value);
});

const railStyle = ({ focused, checked }: { focused: boolean, checked: boolean }) => {
  const style = {
    background: "#000",
    boxShadow: "0 0 0 2px #000"
  };
  if (checked) {
    style.background = '#00b067';
    style.boxShadow = '0 0 0 2px #00b067';
  }
  return style
};
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ModeSwitch"
})
</script>