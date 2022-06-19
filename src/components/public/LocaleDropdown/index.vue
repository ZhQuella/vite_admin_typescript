<!--
 * @Description: 国际化
 * @Author: Aaron
 * @Date: 2022-01-20 12:58:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-19 12:51:33
-->

<template>
  <n-dropdown
    placement="bottom-end"
    :options="internationOption"
    @select="onHandleSelect"
  >
    <div class="locale-select-btn min-w-60px text-center">
      {{ $t('publicComponents.LANGUAGE') }}: {{ context }}
    </div>
  </n-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { internationOption } from "@/assets/config/staticDic";
import { useLocaleStore } from "store/locale";
import { localeInof } from "types/locale";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const localeStore = useLocaleStore();

const context = computed(() => {
  const localeItem: localeInof[] = internationOption.filter(el => (el.key === localeStore.locale));
  return localeItem[0].label;
});
const onHandleSelect = (value: string) => {
  locale.value = value;
  localeStore.locale = value;
}

localeStore.$subscribe((mutation, state) => {
  localStorage.setItem("locale",state.locale);
});
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "LocaleDropdown"
});
</script>
