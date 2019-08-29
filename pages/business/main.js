import Header from "../../components/header/head";
import Footer from "../../components/footer/footer";
import BuidingMap from "../../components/buildingMap/buildingMap";
import NumberGrow from '../../components/NumberGrow'

let runner = null
export default {
  components: {
    Header,
    Footer,
    BuidingMap,
    NumberGrow
  },
  head() {
    return {
      title: "业务合作"
    };
  },
  data(){
    return {
      activeServiceId: 0,
      serviceList: [
        {
          id: 0,
          title: '智能化广告硬件'
        },
        {
          id: 1,
          title: '软件及AI能力支持'
        },
        {
          id: 2,
          title: '京东广告生态'
        },
        {
          id: 3,
          title: '完善的同城业务系统'
        }
      ],
    }
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