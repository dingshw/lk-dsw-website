const path = require('path')

module.exports = {
  modules: [
    [path.resolve('./modules/px2vw.js')]
  ],
  css: [
    './pages/style/common.scss'
  ],
  head: {
    titleTemplate: '%s - 京东来客 - 大数据与AI驱动的,线上线下一体化广告营销平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '由京东数科来客科技部倾力打造的新一代全域营销平台，结合京东的大数据积累和AI能力，打通全网及线下媒介实现全链路的广告精准投放，旗下产品包括来客楼宇通，来客DSP平台，有屏推推，方圆推推，钱呱呱，来客有礼，面向品牌客户及实体商铺提供全面综合的营销解决方案' },
      { hid: 'keywords', name: 'keywords', content: '京东来客，京东，京东数科，京东大数据，品牌营销，品牌推广，实体店铺，DSP，AI，人群定向，智能投放，精准营销，全域营销，客户触达，客群分析，三公里，同城推广，微信营销，楼宇广告，电梯媒体' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '//storage.360buyimg.com/jdlk-website/jdlk.ico'}],
    script: [{ src: '/mobile.js' }]
  }
}
