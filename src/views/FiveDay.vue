<template>
  <div class="test-wrap">
    <div class="top-wrap">
      <el-input class="input" v-model="openUrl" /><el-button @click="fetch">发起请求</el-button>
    </div>
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
      openUrl: 'http://localhost:7001/dingRobat'
    }
  },
  methods: {
    fetch () {
      this.axios.get(this.openUrl).then(res => {
        console.log(res.data)
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.top-wrap {
  width: 800px;
  height: 40px;
  margin: 0px auto;
  .input {
    width: 600px;
  }
}
</style>
