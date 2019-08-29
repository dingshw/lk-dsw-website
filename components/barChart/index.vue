<template>
  <div :style="{height:height,width:width}"></div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
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
    left: {
      type: Number,
      default: 55
    },
    dataList: {
      type: Object,
      default: {xData: [], yData: []}
    }
  },
  mounted() {
    this.initChart(this.left);
  },
  methods: {
    initChart(left=55) {
      let myChart = echarts.init(this.$el);
      // 绘制图表
      myChart.setOption({
        grid: {
          left: left,
          top: 0,
          right: 0,
          bottom: 0
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                textAlign: 'left',
                fontSize:'12px',
                fontFamily:"'PingFang SC', 'MicrosoftYaHei'",
                fontWeight:400,
                color: "rgba(255,255,255,0.5)",
                opacity:0.5,
              }
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: this.dataList.xData
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: this.dataList.xData
          }
        ],
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                textAlign: 'left',
                color: "rgba(255,255,255,1)"
              }
            },
            zlevel: 2,
            barWidth: "4",
            barCategoryGap: '20',
            data: this.dataList.yData
          },
          {
            type: "bar",
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
              normal: {
                textAlign: 'left',
                color: "rgba(255,255,255,0.3)",
                borderWidth: 0
              }
            },
            barWidth: "4",
            barCategoryGap: '20',
            data: [100, 100, 100, 100, 100, 100]
          }
        ]
      });
    }
  }
};
</script>
