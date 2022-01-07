<script>
import { defineComponent } from 'vue'
/**
 * 两种方式实现
 * 1. translate
 * 2. scrollTop
 * 虚拟滚动 需要自己计算，我注释已经写上了 太懒了
 */

// IntersectionObserver 检测元素是否可见
// window.onvisable 检测窗口是否课件

/**
 * data: [
 *  {
 *    title: '1', // 显示文本
 *    key: 2 // 唯一主键
 *  }
 * ]
 */

function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

let allLen = 0
let timer = null

export default defineComponent({
  name: 'Test1',
  props: {
    data: {
      type: Array,
      require: true
    },
    direction: {
      type: String,
      validator (value) {
        return oneOf(value, ['vertical', 'horizontal'])
      },
      default: 'vertical'
    },
    autoStart: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    itemSize: {
      type: Number,
      default: 10
    },
    cacheSize: {
      type: Number,
      default: 30
    },
    hoverStop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scrollSize: 0,
      status: 'unstart' // starting, stop, destory
    }
  },
  watch: {
    'list.length' () {
      this.$nextTick(this.restart())
    }
  },
  mounted () {
    this.start()
  },
  unmounted () {
    this.stop()
  },
  render () {
    return <ul
      ref="scollEl"
      class={['scroll-wrap', this.direction === 'vertical' ? 'scroll-wrap-y-auto' : 'scroll-wrap-x-auto']}
      style={{ transform: `translate${this.direction === 'vertical' ? 'Y' : 'X'}(${this.scrollSize}px)` }}
      onClick={this.click}
      onMousewheel={this.mouseWheel}
      onMouseenter={this.mouseEnter}
      onMouseleave={this.mouseLeave} >
      {
        // 使用一屏所见的数组维护
        this.data.map(d => {
          // 暂不考虑slot or render function
          return <li class="scroll-item">{d.title}</li>
        })
      }
    </ul>
  },
  methods: {
    // ----------- scroll handler-----------
    start () {
      if (this.autoStart && this.data.length > 0) {
        if (!this.getDomStatus(this.$refs.scollEl)) return
        this.loopScroll(this.$refs.scollEl)
        this.status = 'starting'
      }
    },
    restart () {
      if (this.direction === 'vertical') {
        this.$refs.scollEl.scrollTop = 0
      } else {
        this.$refs.scollEl.scrollleft = 0
      }
      this.start()
    },
    stop () {
      if (timer) clearInterval(timer)
      if (this.status !== 'stop') this.status = 'destory'
    },
    // ------------ event handler -------------
    click (event) {
      this.$emit('on-click', event)
    },
    mouseWheel (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    mouseEnter () {
      if (this.status === 'starting') this.status = 'stop'
      this.stop()
    },
    mouseLeave () {
      this.start()
    },
    // -------------- public methods ------------
    loopScroll (el) {
      const height = el.parentNode.clientHeight
      timer = setInterval(() => {
        // 暂不考虑上下
        // if (el.scrollTop + el.clientHeight === allLen) this.stop()
        // el.scrollTop += 1
        if (Math.abs(this.scrollSize) + height >= el.clientHeight && !this.loop) this.stop()
        this.scrollSize -= 1
        /**
         * 虚拟滚动
         * 0. height = itemSize * data.length
         * 1. 一屏展示元素总数：height / itemSize
         * 2. 当前滚动那个元素：(scrollSize - height) / itemSize
         * 3. 缓存区域元素总数：cacheSize
         * 4. 根据当前滚动的数组，批量更新当前数组的前/中/后部分（中为视图所见区域）
         */
      }, 16)
    },
    getScrollPos (el) {
      return el
        ? el[this.direction === 'vertical' ? 'scrollTop' : 'scrollLeft']
        : 0
    },
    getElementPos (el) {
      return el
        ? el[this.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth']
        : 0
    },
    getDomStatus (el) {
      // 获取元素状态，隐藏或不可见 不需要开始滚动
      allLen = this.getElementPos(el)
      return allLen > 0
    }
  }
})
</script>

<style scoped>
/* .scroll-wrap {
  width: 100%;
  height: 100%;
} */

.scroll-wrap-x-auto {
  overflow-x: auto;
}

.scroll-wrap-y-auto {
  overflow-y: auto;
}

</style>
