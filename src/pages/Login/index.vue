<template>
  <div class="login-page-warp">
    <div class="login-mode-switch flex justify-between min-w-130px enter-x">
      <div class="mr-14px">
        <span class="mr-5px">{{ $t('publicComponents.LANGUAGE') }}:</span>
        <locale-dropdown />
      </div>
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
import LocaleDropdown from "components/public/LocaleDropdown/index.vue";
import Illustrations from 'components/pages/login/Illustrations.vue';
import LoginForm from 'components/pages/login/LoginForm.vue';
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage"
});
</script>
