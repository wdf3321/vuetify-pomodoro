<template lang="pug">
v-app(:theme="theme")
  v-app-bar(color='#f06292')
    v-app-bar-nav-icon#icon()
    v-app-bar-title 番茄鐘
    v-btn(icon="mdi-home" variant="text" to="/")
    //- v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    v-btn(:icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="themeChange")
    v-btn(icon="mdi-cog" variant="text" to="/settings")
    v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")

  v-main
    v-container.p-0
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
const theme = ref('light')

function themeChange () {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
#icon{
background:transparent;
}
.v-btn
{
  color: primary;
  background:transparent;
}
</style>
