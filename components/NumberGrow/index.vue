<template>
<div class="number-grow-warp">
  <div ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">293</div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  props: {
    time: {
      type: Number,
      default: 2
    },
    value: {
      type: Number,
      default: 293
    }
  },
  methods: {
    numberGrow (ele) {
      let _this = this

      let step = (_this.value * 10) / (_this.time * 1000)
      let current = 0
      let start = 0
      let t = setInterval(function () {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = parseInt(start)
        ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
      }, 10)
    }
  },
  mounted () {
    this.numberGrow(this.$refs.numberGrow)
  }
}
</script>

<style>
.number-grow-warp{
  transform: translateZ(0);
}
</style>