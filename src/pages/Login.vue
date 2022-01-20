<template>
  <div class="login-page-warp">
    <div class="login-mode-switch">
      <mode-switch />
    </div>

    <div class="flex h-full">
      <div class="-enter-x hidden min-h-full pl-4 mr-4 xl:flex xl:flex xl:w-6/12">
        <Illustrations
          :size="650"
        />
      </div>

      <div class="enter-x flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
        <login-form />
      </div>
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
