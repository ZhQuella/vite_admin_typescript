<!--
 * @Description: 登录Form
 * @Author: Aaron
 * @Date: 2022-01-10 22:34:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 15:15:14
-->

<template>
  <div class="login-from__full duration-350 relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-80%">
    <div class="logo-full mx-auto my-20px enter-x">
      <img :src="getSrc(theme?'logo/dark-logo.png':'logo/light-logo.png')">
    </div>
    <h2 class="mb-20px text-2xl font-bold text-center xl:text-3xl xl:text-left enter-x">
      {{ $t('LoginPage.LOGIN') }}
    </h2>
    <n-form
      ref="formRef"
      label-placement="left"
      :rules="getRules"
      :model="loginForm"
    >
      <n-form-item
        path="userName"
        class="enter-x"
      >
        <n-input
          v-model:value="loginForm.userName"
          size="large"
          :placeholder="$t('validationMessage.ENTER_USER_NAME')"
        >
          <template #prefix>
            <n-icon><icon-user-out /></n-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item
        path="password"
        class="enter-x"
      >
        <n-input
          v-model:value="loginForm.password"
          size="large"
          :placeholder="$t('validationMessage.ENTER_PASSWORD')"
          type="password"
          show-password-on="mousedown"
        >
          <template #prefix>
            <n-icon><icon-lock-out /></n-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item
        path="inputValue"
        class="enter-x"
      >
        <n-checkbox
          v-model:checked="loginForm.keep"
        >
          {{ $t('LoginPage.REMEMBER_ME') }}
        </n-checkbox>
      </n-form-item>
    </n-form>
    <n-button
      block
      size="large"
      type="primary"
      class="enter-x"
      @click="onLoginClick"
    >
      {{ $t('LoginPage.LOGIN') }}
    </n-button>
    <n-divider class="-enter-y">
      {{ $t('LoginPage.THIRD_PARTY_LOGIN') }}
    </n-divider>
    <!-- 以下内容待处理 -->
    <div class="flex w-3/5 justify-between mx-auto">
      <n-button
        circle
        class="enter-y"
      >
        <template #icon>
          <n-icon><icon-wechat /></n-icon>
        </template>
      </n-button>
      <n-button
        circle
        class="enter-y"
      >
        <template #icon>
          <n-icon><icon-twitter /></n-icon>
        </template>
      </n-button>
      <n-button
        circle
        class="enter-y"
      >
        <template #icon>
          <n-icon><icon-github /></n-icon>
        </template>
      </n-button>
      <n-button
        circle
        class="enter-y"
      >
        <template #icon>
          <n-icon><icon-alipay /></n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import { getSrc } from "util/systemUtils";
import { useThemeStore } from "store/theme";
import { useI18n } from "vue-i18n";
import { useLocaleStore } from "store/locale";
import { useRouter } from 'vue-router';

const themeStore = useThemeStore();
const localeStore = useLocaleStore();
const router = useRouter();

const theme = computed(() => {
  return themeStore.isDark
});

const formRef = ref();

const loginForm = reactive({
  userName: "admin",
  password: "123456",
  keep: false
});

const i18n = useI18n();

const getRules = computed(() => {
  const userNameMessage = i18n.t('validationMessage.ENTER_USER_NAME');
  const passwordMessage = i18n.t('validationMessage.ENTER_PASSWORD')

  return {
    userName: [{
      required: true,
      message: userNameMessage,
      trigger: ['input', 'blur']
    }],
    password: [{
      required: true,
      message: passwordMessage,
      trigger: ['input', 'blur']
    }]
  };
});

const onLoginClick = async () => {
  try{
    await formRef.value?.validate();
    if(loginForm.keep){
      const accountInfo = JSON.stringify(loginForm);
      //  存储账号密码
      localStorage.setItem("account", accountInfo);
    }
    else{
      localStorage.removeItem("account");
    }
    //  登录逻辑
    router.push({ name: "WorkBench" });
    //  存储Token
    sessionStorage.setItem("token", `${+new Date()}`);
  }catch{
    //  不处理错误
  }
};

localeStore.$subscribe(async (mutation, state) => {
  //  切换语言后清空校验状态
  //  不清空校验状态会导致切换语言时显示验证信息语言显示错误
  await formRef.value?.restoreValidation()
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginForm"
});
</script>
