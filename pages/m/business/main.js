import Header from "@/components/m-header/head";
import Footer from '@/components/m-footer/footer'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "业务合作"
    };
  },
  data(){
    return {
      supportIndex: 0,
      supportList: [
        {id: 0, name: '智能化广告硬件'},
        {id: 1, name: '软件及AI能力'},
        {id: 2, name: '京东广告生态'},
        {id: 3, name: '同城业务系统'},
      ],
    }
  },
  methods: {
    leftPage(){
      let {supportIndex} = this
      this.supportIndex = supportIndex < 1 ? 3 : --supportIndex
      if(this.supportIndex <=2) {
        this.$refs.menuSupport.scrollLeft = 0
      } else {
        this.$refs.menuSupport.scrollLeft = 106
      }
    },
    rightPage(){
      let {supportIndex} = this
      this.supportIndex = supportIndex > 2 ? 0 : ++supportIndex
      if(this.supportIndex === 3) {
        this.$refs.menuSupport.scrollLeft = 106
      } else {
        this.$refs.menuSupport.scrollLeft = 0
      }
    }
  }
};