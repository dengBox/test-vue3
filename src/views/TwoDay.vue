<template>
  <div class="tabs-wrap">
    <el-button type="warning" @click="printError">错误测试</el-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // setup () {
  //   return {}
  // },
  data () {
    return {
      activeKey: 'one',
      tabList: [
        {
          label: 'one card',
          key: 'one'
        },
        {
          label: 'two card',
          key: 'two'
        }
      ]
    }
  },
  methods: {
    printError () {
      throw new Error('test-error')
    }
  }
})
</script>

<style>
html, body {
  padding: 0;margin: 0;
}
</style>
