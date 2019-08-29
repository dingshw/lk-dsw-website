<template>
  <div :style="{height:height,width:width}"></div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入组件
require("echarts/lib/chart/pie");
export default {
  props: {
    width: {
      type: String,
      default: "260px"
    },
    height: {
      type: String,
      default: "140px"
    },
    dataList: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$el);
      // 绘制图表
      myChart.setOption({
        grid: {
          left: 60,
          top: 0,
          right: 0,
          bottom: 0
        },
        color: ['rgba(255,255,255,0.3)','rgba(255,255,255,1)'],
        series: [
          {
            type: "pie",
            startAngle: 90,
            radius: ['70%', '80%'],
            data: this.dataList
          }
        ]
      });
    }
  }
};
</script>
