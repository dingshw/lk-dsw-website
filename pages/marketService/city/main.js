import Header from "../../../components/header/head";
import Footer from "../../../components/footer/footer";
import BuidingMap from "../../../components/buildingMap/buildingMap";

let runner = null

export default {
  components: {
    Header,
    Footer,
    BuidingMap
  },
  head() {
    return {
      title: "同城推广"
    };
  },
  data() {
    return {
      activeServiceId: 0,
      serviceList: [
        {
          id: 0,
          title: '周边3公里'
        },
        {
          id: 1,
          title: '大数据驱动'
        },
        {
          id: 2,
          title: '一体式覆盖'
        },
        {
          id: 3,
          title: '闭环营销'
        }
      ],
      
      // activeLoctionId: 5,
      // locationList: [1,2,3,4,5],

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

      youpingtuituiList: [
        {
          title: "投放便捷",
          desc: "体验流畅轻便，快速配置，一键筛选",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/bianjietoufang.png"
        },
        {
          title: "多纬度投放支持",
          desc: "人群+楼宇多维度定向投放支持",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/duoweizhichi.png"
        },
        {
          title: "实时监测",
          desc: "实时投放效果监测",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/shishijiance.png"
        },
        {
          title: "触达用户",
          desc: "打通商家CRM系统，实现再次用户触达",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/chudayonghu.png"
        }
      ],
      fangyuantuituiList: [
        {
          title: "投放便捷",
          desc: "投放简单便捷，上传商品图片及优惠券即可",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/bianjietoufang.png"
        },
        {
          title: "快速修改",
          desc: "随时随地更换优惠活动",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/kuaisuxiugai.png"
        },
        {
          title: "实时数据",
          desc: "实时查看活动展示数据以及优惠券领取情况",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/shishishuju.png"
        },
        {
          title: "商户引流",
          desc: "商户引流到店",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/shanghuyinliu.png"
        }
      ],
      qianguaguaList: [
        {
          title: "吸引用户",
          desc: "承接线下流量，并通过趣味互动将用户引到线下",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/xiyinyonghu.png"
        },
        {
          title: "积分兑现",
          desc: "多任务赚积分，积分可兑现金",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/jifenduihuan.png"
        },
        {
          title: "支持提现",
          desc: "支持微信提现",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/zhichitixian.png"
        },
        {
          title: "优惠券核销",
          desc: "支持商家优惠券领取、核销",
          icon: "https://storage.jd.com/jdlk-website/citymarketing/youhuiquan.png"
        }
      ]
    };
  },
  methods:{
    changeId(id){
      // this.clearRunner()
      this.activeServiceId = id
      // this.startRun()
    },
    startRun(){
      this.clearRunner()
      runner = setTimeout(() => {
        this.changeIdAuto()
      }, 5000)
    },
    clearRunner(){
      if(runner){
        clearTimeout(runner)
      }
      runner = null
    },
    changeIdAuto(){
      let {activeServiceId} = this
      this.activeServiceId = activeServiceId >= 3 ? 0 : ++activeServiceId
      this.startRun()
    },
    enterFn(){
      // this.clearRunner()
    },
    leaveFn(){
      // this.startRun()
    }
  },
  mounted(){
    // this.startRun()
  },
  beforeDestroy(){
    this.clearRunner()
  }
};