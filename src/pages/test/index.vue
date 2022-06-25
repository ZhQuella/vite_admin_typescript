<template>
  <div>
    <h1
      v-for="(item, index) in 1000"
      :key="index"
    >
      {{ props.height }}
    </h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: Number,
    default: 0
  }
})

</script>

<style lang="scss" scoped>

</style>