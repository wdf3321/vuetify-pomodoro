<template lang="pug">
v-app(:theme="theme")
  v-app-bar(color="#f06292")
    v-app-bar-nav-icon#icon(v-model="drawer" @click.stop="drawer = !drawer")
    v-app-bar-title 番茄鐘 | POMODORO
    //- v-btn(icon="mdi-home" variant="text" to="/")
    //- v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    v-btn(:icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="themeChange")
    //- v-btn(icon="mdi-cog" variant="text" to="/settings")
    v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-navigation-drawer(
v-model="drawer" absolute
      temporary)
    v-list
    v-list-item(to="/" title="首頁" prepend-icon="mdi-home")
    v-list-item(to="/list" title="事件" prepend-icon="mdi-shopping")
    v-list-item(to="/settings" title="鈴聲選擇" prepend-icon="mdi-format-list-bulleted")
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
<script>

export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}

</script>
<style lang="scss">
#icon {
  background: transparent;
}
.v-btn {
  filter: hue-rotate(180deg);
  background: transparent;
}
.v-navigation-drawer{
max-height: 100vh;
}
</style>
