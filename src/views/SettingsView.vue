<template lang="pug">
v-row#settings(justify="center" align="center")
  v-col(cols="12")
    h1.text-center 請選擇鈴聲
  v-col.v-col-11.v-col-lg-9
    v-table
      thead
        tr
          th 名稱
          th 試聽
          th 選擇
      tbody
        //- tr(v-for="alarm in settings.alarms" :key="alarm.id")
        tr(v-for="alarm in alarms" :key="alarm.id")
          td {{ alarm.name }}
          td()
            audio(:src="alarm.file" controls)
          td
            v-radio-group(v-model="selectedAlarms")
              v-radio(:value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarms } = storeToRefs(settings)
</script>
