<template>
  <div class="login-mode-switch">
    <mode-switch />
  </div>
  <n-row class="login-continer-row">
    <n-col
      :span="10"
      :offset="1"
      class="login-continer_sidebar"
    >
      <Illustrations :size="700" />
    </n-col>
    <n-col
      :span="12"
      :offset="1"
      class="login-continer_sidebar"
    >
      <div class="login-from-warp">
        <login-form />
      </div>
    </n-col>
  </n-row>
</template>

<script lang="ts" setup>
import { defineProps, inject } from "vue";
import * as  naive from "naive-ui";

import ModeSwitch from "components/public/ModeSwitch/index.vue";
import Illustrations from 'components/pages/login/Illustrations.vue';

import LoginForm from 'components/pages/login/LoginForm.vue';

const config = inject("configProviderInjection");

console.log(naive);

</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage"
});
</script>
