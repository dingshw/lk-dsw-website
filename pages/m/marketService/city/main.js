import Header from "@/components/m-header/head";
import Footer from '@/components/m-footer/footer'

const productListBase = [
  {
    title: '有屏推推',
    desc: '基于微信的小程序系统，使用轻便，提供CPW+CPM+CPT多种投放方式，改为主的售卖方式，提供以“ 有效展示”定价的方式售卖、降低投放门槛，满足碎片化投放需求，同时给出实时的数据报告，随时随地投放和管理您的线下广告。',
    mainimg: 'https://storage.jd.com/jdlk-website/citymarketing/m2/b1qr-1.png',
    qr: 'https://storage.jd.com/jdlk-website/citymarketing/m2/b1.png',
    iconList: [
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/bianjietoufang.png',
        name: '投放便捷',
        subtitle: '体验流畅轻便，快速配置，一键筛选'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/duoweizhichi.png',
        name: '多纬度投放支持',
        subtitle: '人群+楼宇多维度定向投放支持'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/duoweizhichi.png',
        name: '实时监测',
        subtitle: '实时投放效果监测'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/duoweizhichi.png',
        name: '触达用户',
        subtitle: '打通商家CRM系统，实现再次用户触达',
        type: 'wide'
      }
    ]
  },
  {
    title: '方圆推推',
    desc: '线下小商户福利平台，我们将社区电梯广告屏一部分资源免费给小B商户使用，小商户注册后添加店铺即可免费发布优惠活动，所发布活动在周边3公里社区屏幕展示，社区用户扫码即可领取优惠券到店使用。',
    mainimg: 'https://storage.jd.com/jdlk-website/citymarketing/m2/b2-1.png',
    qr: 'https://storage.jd.com/jdlk-website/citymarketing/m2/b2qr.png',
    iconList: [
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/bianjietoufang.png',
        name: '投放便捷',
        subtitle: '投放简单便捷，上传商品图片及优惠券即可'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-kuaisuxiugai.png',
        name: '快速修改',
        subtitle: '随时随地更换优惠活动'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-shishishuju.png',
        name: '实时数据',
        subtitle: '实时查看活动展示数据，以及优惠券领取情况'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-shanghuyinliu.png',
        name: '商户引流',
        subtitle: '商户引流到店',
        type: 'wide'
      }
    ]
  },
  {
    title: '钱呱呱',
    desc: '微信小程序用户福利平台，我们将一部分广告收 入用来激励用户观看广告，进一步增强广告效果，也持续的沉淀广告主同受众用户的关系，为广告主创造更多的附加价值。',
    mainimg: 'https://storage.jd.com/jdlk-website/citymarketing/m2/c-1.png',
    qr: 'https://storage.jd.com/jdlk-website/citymarketing/m2/cqr.png',
    iconList: [
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-xiyinyonghu.png',
        name: '吸引用户',
        subtitle: '承接线下流量，并通过趣味互动将用户引到线下'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-jifenduihuan.png',
        name: '积分兑现',
        subtitle: '多任务赚积分，积分可兑现金'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-zhichitixian.png',
        name: '支持提现',
        subtitle: '支持微信提现'
      },
      {
        img: 'https://storage.jd.com/jdlk-website/citymarketing/m2/i-youhuiquan.png',
        name: '优惠券核销',
        subtitle: '支持商家优惠券领取、核销'
      }
    ]
  }
]

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "同城推广"
    };
  },
  data(){
    return{
      serviceIndex: 0,
      serviceList: [
        {id: 0, name: '周边3公里'},
        {id: 1, name: '大数据驱动'},
        {id: 2, name: '一体式覆盖'},
        {id: 3, name: '闭环营销'},
      ],
      productIndex: 0,
      productMenu:[
        {id: 0, name: '有屏推推', title: ''},
        {id: 1, name: '方圆推推', title: ''},
        {id: 2, name: '钱呱呱', title: ''},
      ],
      productList: [productListBase[0]],
      jutouList: [{
        name: '微信',
        icon: 'weixin'
      },{
        name: '微博',
        icon: 'weibo'
      },{
        name: '抖音',
        icon: 'douyin'
      },{
        name: '今日头条',
        icon: 'toutiao'
      },{
        name: '小红书',
        icon: 'xiaohongshu'
      },{
        name: '京东',
        icon: 'jingdong'
      },{
        name: '京东金融',
        icon: 'jdjr'
      },{
        name: '趣头条',
        icon: 'qutoutiao'
      },{
        name: '墨迹天气',
        icon: 'mojitianqi'
      },{
        name: '',
        icon: 'more'
      }],
    }
  },
  methods:{
    leftPage(){
      let {serviceIndex} = this
      this.serviceIndex = serviceIndex < 1 ? 3 : --serviceIndex
      if(this.serviceIndex<=2) {
        this.$refs.menuService.scrollLeft = 0
      }
    },
    rightPage(){
      let {serviceIndex} = this
      this.serviceIndex = serviceIndex > 2 ? 0 : ++serviceIndex
      if(this.serviceIndex===3) {
        this.$refs.menuService.scrollLeft = 46
      } else {
        this.$refs.menuService.scrollLeft = 0
      }
    },
    leftPage2(){
      let {productIndex} = this
      this.productIndex = productIndex < 1 ? 2 : --productIndex
    },
    rightPage2(){
      let {productIndex} = this
      this.productIndex = productIndex > 1 ? 0 : ++productIndex
    }
  },
  watch: {
    productIndex(v){
      this.productList = [productListBase[v]]
    }
  }
};