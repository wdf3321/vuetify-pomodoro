<template lang="pug">
v-row.text-center
  v-col#home.v-col-lg-6.v-col-12(justify="center")
    h1 {{ currentText }}
    h1 剩餘 {{ currentTime }}
    v-img(src="https://media.tenor.com/1RyQpvCnaF0AAAAC/bird-parrot.gif")
    v-btn-group
      v-btn(v-if="status !== 1" icon="mdi-play" variant="text" @click="startTimer" )
      v-btn(v-if="status === 1" icon="mdi-pause" variant="text" @click="pauseTimer" )
      v-btn(v-if="currentItem.length >= 0" right icon="mdi-skip-next" variant="text" @click="finishTimer" )
  v-col.v-col-lg-6.v-col-12(cols="6" justify="center")
    v-text-field(ref="input" v-model="newItem" label="新增事項" :rules="[rules.required, rules.length]" @keydown.enter="onInputSubmit")
      template(#append)
        v-btn(icon="mdi-plus" variant="text" @click="onInputSubmit")
    h1#thing.text-center 待辦事項
    v-table
      thead
        tr
          th 名稱
          th 操作
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") 沒有事項
        tr(v-for="item in items" v-else :key="item.id" ref="editInputs")
          td
            v-text-field(v-if="item.edit" v-model="item.model" autofocus :rules="[rules.required, rules.length]")
            span(v-else) {{ item.name }}
          td
            span(v-if="item.edit")
              v-btn(icon="mdi-check" variant="text" color="green" @click="confirmEditItem(item.id)")
              v-btn(icon="mdi-undo" variant="text" color="red" @click="undoEditItem(item.id)")
            span(v-else)
              v-btn(icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)")
              v-btn(icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)")
    h1.text-center 已完成事項
    v-table.text-center
      thead
        tr
          th 名稱
          th 操作
      tbody
        tr(v-if="finishedItems.length === 0")
          td.text-center(colspan="2") 沒有事項
        tr(v-for="item in finishedItems" v-else :key="item.id" ref="editInputs")
          td {{ item.name }}
          td
            v-btn(icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)")
            v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")
</template>

<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { currentItem, items, timeleft, finishedItems } = storeToRefs(list)
const { start, countdown, finish, addItem, editItem, delItem, confirmEditItem, undoEditItem, delFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

const newItem = ref('')
const input = ref(null)
const editInputs = ref([])

const rules = {
  required (v) {
    return !!v || '欄位必填'
  },
  length (v) {
    return v.length >= 3 || '必須三個字以上'
  }
}

const onInputSubmit = async () => {
  const valid = await input.value.validate()
  console.log(valid)
  if (valid.length > 0) return
  addItem(newItem.value)
  input.value.$el.querySelector('input').blur()
  input.value.reset()
}
// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

let timer = 0
const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (currentItem.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer()
      }
    }, 1000)
  }
}
const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}
const finishTimer = () => {
  clearInterval(timer)
  status.value = 0
  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()
  if (notify.value) {
    // eslint-disable-next-line
    const notification = new Notification('事項完成', {
      body: currentText.value + '已完成',
      icon: 'https://github.com/wdf3321.png'
    })
  }
  finish()
  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  return currentItem.value.length > 0 ? currentItem.value : items.value.length > 0 ? `即將開始 : ${list.items[0].name} ` : '請新增事項'
})
const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>
<!-- <style>
.v-main{
  background:#F8BBD0;
}

#home{
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
</style> -->
