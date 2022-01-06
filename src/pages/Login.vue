<template>
  <div class="login-mode-switch">
    <mode-switch />
  </div>
  <illustrations
    :size="200"
  />
</template>

<script lang="ts" setup>
import ModeSwitch from "components/public/ModeSwitch/index.vue";
import Illustrations from 'components/pages/login/Illustrations.vue';

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage"
});
</script>
