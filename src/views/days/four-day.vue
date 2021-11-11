<template>
  <div class="test-wrap">
    <div class="top-wrap">
      <el-input class="input" v-model="openUrl" /><el-button @click="fetch">发起请求</el-button>
    </div>
    <div class="wrap">
      <iframe class="iframe-wrap" :src="aliLoginUrl" frameborder="0"></iframe>
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
      openUrl: 'https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?jsv=2.4.8&appKey=12574478&api=mtop.taobao.detail.getdetail&v=6.0&dataType=jsonp&ttid=2017%40taobao_h5_6.6.0&AntiCreep=true&type=jsonp&data=%7B%22itemNumId%22%3A%22588757826916%22%7D',
      aliLoginUrl: ''
    }
  },
  methods: {
    fetch () {
      this.aliLoginUrl = ''
      this.axios.get(this.openUrl).then(res => {
        const respUrl = res.data.data.url
        console.log(respUrl)
        if (respUrl.indexOf('https://login.m.taobao.com/login.htm') > -1) {
          this.aliLoginUrl = respUrl
        } else {
          this.aliLoginUrl = respUrl
          // 进行验证
          // this.axios.get(respUrl).then(res => {
          //   console.log('验证页面', res.data)
          // })
          /**
           * 1. 一段时间内，验证码在同一个ip上只能通过一次
           * 2. 验证码有时效性
           */
          // code: 0
          // code: 300
        }
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
.wrap {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .iframe-wrap {
    border: 1px solid #000;
    width: 1000px;
    height: 400px;
  }
}
</style>
