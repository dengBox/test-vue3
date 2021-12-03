<template>
  <div class="test-scroll">
    <RotationScroll id="scroll" :data="list" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RotationScroll from '@/components/RotationScroll.vue'

export default defineComponent({
  name: 'Day_4',
  components: {
    RotationScroll
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let i = 0; i < 100; i++) {
      this.list.push({
        title: `第 ${i + 1} 条`
      })
    }
  }
})
</script>

<style lang="scss" scoped>

.test-scroll {
  height: 300px;
  width: 400px;
  // margin: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
}

</style>
