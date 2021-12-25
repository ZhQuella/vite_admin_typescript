<template>
  <div> 
    <img :src="getSrc('logo/light-logo.png')">
  </div>
</template>

<script lang="ts" setup>
import { getSrc } from "util/systemUtils";

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage"
});
</script>
