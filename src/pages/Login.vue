<template>
  <div class="login-page-warp">
    <div class="login-mode-switch">
      <mode-switch />
    </div>

    <div class="-enter-x">
      <Illustrations
        :size="700"
      />
    </div>

    <div class="enter-x">
      <login-form />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModeSwitch from "components/public/ModeSwitch/index.vue";
import Illustrations from 'components/pages/login/Illustrations.vue';

import LoginForm from 'components/pages/login/LoginForm.vue';


</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage"
});
</script>
