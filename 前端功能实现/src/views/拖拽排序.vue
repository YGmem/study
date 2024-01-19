<template>
  <div>
    <div id="show" v-show="false">11</div>
    <div :class="red" @click="open">使用对象class控制样式显示</div>
    <button @click="() => {
      red.red = !red.red
    }
      ">
      点击我
    </button>
    <draggable :list="list" ghost-class="ghost" item-key="id" chosen-class="chosenClass" animation="300" @start="onStart"
      @end="onEnd">
      <template #item="{ element }">
        <div class="item">
          {{ element.name }}
          <draggable :list="element.children" ghost-class="ghost" item-key="id" chosen-class="chosenClass"
            animation="300">
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
    <table-m></table-m>
    {{ obj2 }}{{ obj }}
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  watch
} from 'vue'
import TableM from '../components/TableM.vue'
// 导入draggable组件
import draggable from 'vuedraggable'

const red = ref({
  red: true
})

interface TreeNode {
  name: string
  id: number
  children?: TreeNode[]
}

const open = () => {
  // 打开新窗口
  const newWindow = window.open('http://127.0.0.1:5173/')

  // 检查新窗口是否加载完毕
  const checkReady = setInterval(function () {
    console.log(newWindow?.document.readyState)
    if (newWindow?.document.readyState === 'complete') {
      clearInterval(checkReady)

      // 新窗口加载完毕，发送消息
      newWindow.postMessage('Hello, I am sender', '*')
    }
  }, 100)
}

const list = reactive([
  {
    name: 'www.itxst.com',
    id: 0,
    children: [
      { id: 3, name: '子节点1' },
      { id: 4, name: '子节点2' }
    ]
  },
  { name: 'www.baidu.com', id: 1 },
  { name: 'www.google.com', id: 2 }
])

watch(list, (newl, oldl) => {
  console.log(newl, oldl)
})

const state = reactive({
  // 需要拖拽的数据，拖拽后数据的顺序也会变化
  list
})

const obj = ref({ name: '测试' })
const obj2 = reactive([obj])

const a = ref(1)

watch(a, (newV, oldV, beforeFn) => {
  const a = true
  beforeFn(() => {
    console.log(newV, oldV)
  })

  console.log(newV, oldV)
})

setTimeout(() => {
  a.value = 2
}, 0)
setTimeout(() => {
  a.value = 4
}, 0)

// 拖拽开始的事件
const onStart = () => {
  console.log('开始拖拽')
  // console.log(aaa)
  console.log(state)
}

// 拖拽结束的事件
const onEnd = () => {
  console.log('结束拖拽')
  console.log(state)
}
</script>

<style scoped lang="less">
.red {
  color: red;
}
</style>
