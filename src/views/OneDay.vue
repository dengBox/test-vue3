<template>
 <div id="temp-div"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import start from '../../plugin/heart'

export default defineComponent({
  setup () {
    return {}
  },
  mounted () {
    start()
  }
})
</script>

<style scoped lang="scss">
#temp-div {
  width: 400px;
  height: 400px;
  border: 1px solid #0ff;
  margin: 0 auto;
}
</style>
