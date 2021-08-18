<template>
  <div class="interval-wrap">
    <ul class="shop-list">
      <li class="shop-item" v-for="shop in shopList" :key="shop.key">
        <p class="shop-item-label">{{shop.label}}</p>
        <p class="shop-item-time">{{new Date(shop.startTime).toLocaleString()}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MyInterVal } from '../assets/ts/myInterval'

interface shop {
  key: string,
  label: string,
  startTime: number,
  endTime: number
}

export default defineComponent({
  // setup () {
  //   const shopList: Array<shop> = []
  //   return {
  //     shopList,
  //     myInterval: new MyInterVal({
  //       stack: [],
  //       step: 1000
  //     })
  //   }
  // },
  data () {
    const shopList : Array<shop> = []
    return {
      shopList: shopList,
      myInterval: new MyInterVal({
        stack: [],
        step: 1000
      })
    }
  },
  mounted () {
    this.setShop(1000)
    this.bindHook()
  },
  unmounted () {
    this.myInterval.destory()
  },
  methods: {
    setShop (num: number) {
      const time = new Date().getTime()
      while (num > 0) {
        num--
        const step = num * 60 * 1000
        this.shopList.unshift({
          key: `sp${num}`,
          label: `商品${num}`,
          startTime: time + step,
          endTime: time + 1000 * 60 * 60 * 24 + step
        })
      }
    },
    bindHook () {
      this.shopList.forEach(shop => {
        this.myInterval.bind({
          evName: shop.key,
          evCb: () => {
            this.updateTime(shop)
          }
        })
      })
    },
    updateTime (shop: shop) {
      shop.startTime -= 1000
    }
  }
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
</style>

<style scoped lang="scss">
.interval-wrap {
  margin: 10px;
  min-width: 1000px;
  min-height: 400px;
  border: 1px solid #000;
  .shop-list {
    display: flex;
    flex-wrap: wrap;
    .shop-item {
      width: 200px;
      height: 100px;
      background: #eee;
      border: 1px solid rgb(23, 26, 25);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        border-color: #f00;
        transition: border-color .3;
      }
      margin: 10px;
      &-label {
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
      }
      &-time {
        color: #f00;
        padding: 10px;
      }
    }
  }
}
</style>
