<template>
  <div>
    <Header activeMenu="来客营销平台"/>
    <div class="main">
      <div class="main-header-m">
        <img :src="lkMarketing.banner.mimg" :alt="lkMarketing.banner.title" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">{{lkMarketing.banner.title}}</h1>
          <h2 class="main-header-info">{{lkMarketing.banner.info}}</h2>
        </div>
      </div>
      <div class="markering-service">
        <div class="markering-service-type">
          <div class="title-bgtext-m">
            <img class="title-bgIcon-m" :src="lkMarketing.service.titleIconM" :alt="lkMarketing.service.title"/>
            <h4>{{lkMarketing.service.title}}</h4>
          </div>
          <div class="underline-m"></div>
        </div>
        <img @click="downCurrentIndex()" class="arrow-left-m" src="http://storage.jd.com/jdlk-website/lkmarketing/arrow-left-m.png" alt="左箭头"/>
        <img @click="upCurrentIndex()" class="arrow-right-m" src="http://storage.jd.com/jdlk-website/lkmarketing/arrow-right-m.png" alt="右箭头"/>
        <div class="service-list">
          <div class="service-list-line"></div>
          <div 
            @click="changeCurrentIndex(index)"
            v-for="(item, index) in lkMarketing.service.serviceList" 
            :key="index">
            <h5 :class="currnetServiceIndex===index && 'active'">{{item.name}}</h5>
            <div v-if="currnetServiceIndex===index" class="service-item-line"></div>
          </div>
        </div>
        <div class="service-item-title">
          <img :src="lkMarketing.service.serviceList[currnetServiceIndex].numIconM" :alt="lkMarketing.service.serviceList[currnetServiceIndex].title"/>
          <h5>{{lkMarketing.service.serviceList[currnetServiceIndex].name}}</h5>
          <h6>{{lkMarketing.service.serviceList[currnetServiceIndex].desc}}</h6>
        </div>
        <div class="service-item-body" v-if="currnetServiceIndex===0">
          <div class="category-list">
            <div class="category-item" v-for="(item, index) in lkMarketing.service.serviceList[currnetServiceIndex].categoryList" :key="index">
              <h3><span>{{item.num}}</span>{{item.unit}}</h3>
              <h4>{{item.name}}</h4>
            </div>
          </div>
          <img class="tree-line" src="http://storage.jd.com/jdlk-website/lkmarketing/tree-line-m.png" alt="品类数据线"/>
          <div class="everyday-data">
            <div class="lightPointBox top">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <h4>{{lkMarketing.service.serviceList[0].categoryAll.name}}</h4>
            <h5>
              <span>{{lkMarketing.service.serviceList[0].categoryAll.num}}</span>
              <div>{{lkMarketing.service.serviceList[0].categoryAll.unit}}<div>{{lkMarketing.service.serviceList[0].categoryAll.unitText}}</div></div>
            </h5>
          </div>
          <img class="everyday-data-line" src="http://storage.jd.com/jdlk-website/lkmarketing/10-data-line-m.png" alt="每日产生"/>
          <div class="feature-list">
            <h4>投放需求</h4>
            <h4>产品特性</h4>
          </div>
          <div class="service-ai-cicle">
            <img class="service-ai-outer" src="https://storage.jd.com/jdlk-website/lkmarketing/service-ai-outer-m.png" alt="AI人群分析"/>
            <div class="service-ai-inner">
              <div class="service-ai-inner-cicle">
                <img class="service-ai-scan" src="https://storage.jd.com/jdlk-website/lkmarketing/service-ai-scan.png" alt="AI扫描"/>
              </div>
              <h4>{{lkMarketing.service.serviceList[0].aiName}}</h4>
            </div>
          </div>
          <div class="analy-people-line analy-people-line1">
            <div class="lightPointBox top">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
          </div>
          <div class="analy-people">
            <h4>定向人群包</h4>
          </div>
        </div>
        <div class="service-item-body" v-if="currnetServiceIndex===1">
          <div class="analy-people">
            <h4>定向人群包</h4>
          </div>
          <div class="analy-people-line analy-people-line2">
            <div class="lightPointBox top">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
          </div>
          <div class="service-touchuser">
            <img class="service-touchuser-outer" src="https://storage.jd.com/jdlk-website/lkmarketing/touchuserouter.png" alt="用户触达"/>
            <div class="service-touchuser-inner">
              <img class="service-touchuser-inner-bg" src="https://storage.jd.com/jdlk-website/lkmarketingm/touchuserinner.png" alt="用户触达"/>
              <img class="service-touchuser-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/touchusericon.png" alt="用户触达"/>
              <h4>用户触达</h4>
            </div>
          </div>
          <div class="service-channel-line">
            <div class="lightPointBox top">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom1">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom2">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
          </div>
          <div class="service-channel-list">
            <div class="service-channel-item">
              <h4>线上渠道</h4>
              <h5>DSP平台对接主流线上媒体</h5>
              <h5>精准的人群定向投放</h5>
              <ul class="online-list">
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-wx.png" alt="微信"/><h5>微信</h5></li>
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-wb.png" alt="微博"/><h5>微博</h5></li>
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-jd.png" alt="京东"/><h5>京东</h5></li>
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-jdf.png" alt="京东金融"/><h5>京东金融</h5></li>
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-toutiao.png" alt="今日头条"/><h5>今日头条</h5></li>
                <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-other.png" alt="其他"/><h5></h5></li>
              </ul>
            </div>
            <div class="service-channel-item">
              <h4>线下渠道</h4>
              <h5>基于收货地址匹配用户信息</h5>
              <h5>定位目标人群密度最高的楼宇</h5>
              <div class="underline-item">
                <h5 class="tag-title">多种用户信息</h5>
                <div class="underline-item-tag">
                  <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-sex.png" alt="性别"/>性别</h5>
                  <div class="tag-line"></div>
                  <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-married.png" alt="已婚"/>已婚</h5>
                  <div class="tag-line"></div>
                  <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-money.png" alt="消费"/>消费</h5>
                </div>
              </div>
              <div class="underline-item">
                <h5 class="tag-title">多种关注标签</h5>
                <div class="underline-item-tag">
                  <h5>母婴用品</h5>
                  <div class="tag-line"></div>
                  <h5>手机数码</h5>
                  <div class="tag-line"></div>
                  <h5>户外运动</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service-item-body" v-if="currnetServiceIndex===2">
          <div class="service-terminal">
            <h4>广告投放</h4>
          </div>
          <div class="service-strategy">
            <img class="strategy-line1" src="https://storage.jd.com/jdlk-website/lkmarketing/strategy-line-m.png" alt="投放策略修正"/>
            <div class="service-strategy-info"><h4>投放策略修正</h4></div>
            <img class="strategy-line2" src="https://storage.jd.com/jdlk-website/lkmarketing/strategy-line2-m.png" alt="投放策略修正"/>
          </div>
          <div class="closeCase-data">
            <div class="lightPointBox top">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="lightPointBox bottom">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
            <div class="closeCase-line1"></div>
            <h4>结案数据</h4>
            <div class="closeCase-line2"></div>
          </div>
          <div class="service-data-bank">
            <h4>专属数据银行</h4>
            <div class="data-bank">
              <div class="data-store">
                <img class="data-store-outer" src="http://storage.jd.com/jdlk-website/lkmarketing/data-store-outer-m.png" alt="数据仓库"/>
                <div class="data-store-inner">
                  <h5 class="data-store-text">数据仓库</h5>
                  <img class="data-store-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/data-store-icon.png" alt="数据仓库"/>
                  <img class="data-down-arrow" src="https://storage.jd.com/jdlk-website/lkmarketing/down-arrow.png" alt="向下箭头"/>
                  <img class="data-cn-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/jdcn.png" alt="京东超脑"/>
                  <h5 class="data-cn-text">京东超脑</h5>
                </div>
              </div>
              <img class="data-bank-line" src="https://storage.jd.com/jdlk-website/lkmarketing/data-bank-line.png" alt="数据银行"/>
              <div class="data-model">
                <h5>投放数据模型</h5>
                <img class="data-model-cube" src="https://storage.jd.com/jdlk-website/lkmarketing/cube-icon-m.png" alt="投放数据模型"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="markering-channel">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/lkmarketing/contactus.png" alt="硬件设备"/>
          <h4>线上/线下渠道能力</h4>
        </div>
        <div class="underline-m"></div>
        <div class="markering-channel-main">
          <div class="menu-list-title">
            <div @click="changeChannel(0)" class="menu-list-item">
              <h3 :class="currnetChannelIndex===0 && 'title-active'">线上</h3>
              <div class="title-line" :class="currnetChannelIndex===0 && 'title-line-active'"></div>
            </div>
            <div @click="changeChannel(1)" class="menu-list-item">
              <h3 :class="currnetChannelIndex===1 && 'title-active'">线下</h3>
              <div class="title-line" :class="currnetChannelIndex===1 && 'title-line-active'"></div>
            </div>
          </div>
          <div class="markering-channel-body" v-if="currnetChannelIndex===0">
            <div class="channel-card-head channel-card-head1">
              <h3>线上渠道能力</h3>
              <h4>打通了全网媒介渠道路径，通过来客DSP平台对接了线上各类核心头部媒体，并打通媒介数据链路，实现线上广告的精准定向投放。保证客户广告全网最大化的精准曝光</h4>
            </div>
            <div class="channel-card-body">
              <div class="channel-card-item">
                <h5>京东及关联媒体流量信息与数据</h5>
                <ul>
                  <li v-for="(jd, index) in channelByjd" :key="index">
                    <img :src="jd.logo" :alt="jd.name"/>
                  </li>
                </ul>
              </div>
              <div class="channel-card-item">
                <h5>全互联网媒体流量信息数据</h5>
                <ul>
                  <li v-for="(allC, index) in channelByAll" :key="index">
                    <img :src="allC.logo" :alt="allC.name"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="markering-channel-body" v-if="currnetChannelIndex===1">
            <div class="channel-card-head channel-card-head2">
              <h3>线下渠道能力</h3>
              <h4>来客线下屏幕网络，已经基本覆盖国内百余个一线及二线城市，覆盖小区29279个、写字楼5151座，共计56.6万部楼宇广告设备。</h4>
            </div>
            <div class="channel-card-body">
              <div class="channel-card-item">
                <h5>面向主流一二线城市</h5>
                <img class="citymap" src="https://storage.jd.com/jdlk-website/lkmarketingm/citymap.png" alt="主流城市"/>
                <div class="city1"><h6 class="city1-text">北京、上海、广州、深圳</h6></div>
                <div class="city2"><h6 class="city2-text">杭州、西安、青岛</h6></div>
                <div class="city3"><h6 class="city3-text">济南</h6></div>
              </div>
              <div class="channel-card-item">
                <h5>针对主要消费人群，覆盖核心生活场景</h5>
                <img class="channel-life-bg" src="https://storage.jd.com/jdlk-website/lkmarketingm/lifescenebg-m.png" alt="生活场景"/>
                <div class="channel-office-bg">
                  <img class="channel-item-officeicon" src="https://storage.jd.com/jdlk-website/lkmarketingm/officeicon-m.png" alt="写字楼"/>
                  <h6 class="channel-item-text">写字楼</h6>
                </div>
                <div class="channel-house-market">
                  <div class="channel-house-bg">
                    <img class="channel-item-houseicon" src="https://storage.jd.com/jdlk-website/lkmarketingm/houseIcon-m.png" alt="住宅"/>
                    <h6 class="channel-item-text">住宅</h6>
                  </div>
                  <div class="channel-market-bg">
                    <img class="channel-item-markeyicon" src="https://storage.jd.com/jdlk-website/lkmarketingm/markeyicon-m.png" alt="商场"/>
                    <h6 class="channel-item-text">商场</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="markering-plaform">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/hardware/hardwareDevice.png" alt="硬件设备"/>
          <h4>平台产品介绍</h4>
        </div>
        <div class="underline-m"></div>
        <div class="markering-channel-main">
          <div class="menu-list-title">
            <div @click="changePlaform(0)" class="menu-list-item">
              <h3 :class="currnetPlaformIndex===0 && 'title-active'">来客楼宇通</h3>
              <div class="title-line" :class="currnetPlaformIndex===0 && 'title-line-active'"></div>
            </div>
            <div @click="changePlaform(1)" class="menu-list-item">
              <h3 :class="currnetPlaformIndex===1 && 'title-active'">来客DSP平台</h3>
              <div class="title-line" :class="currnetPlaformIndex===1 && 'title-line-active'"></div>
            </div>
          </div>
          <div class="device-info">
            <div class="title">{{platformInfoList[currnetPlaformIndex].title}}</div>
            <div class="info">{{platformInfoList[currnetPlaformIndex].info}}</div>
            <div :class="'img-'+currnetPlaformIndex"><img :src="platformInfoList[currnetPlaformIndex].img" :alt="platformInfoList[currnetPlaformIndex].title"/></div>
            <div class="card-item" :class="'card-item-'+currnetPlaformIndex">
              <div class="card-info" v-for="(item, index) in platformInfoList[currnetPlaformIndex].cardInfoList" :key="index">
                <img :src="item.icon" :alt="item.title"/>
                <div>
                  <div class="card-title">{{item.title}}</div>
                  <div class="card-message">{{item.desc}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/m-header/head'
import Footer from '~/components/m-footer/footer'
import lkMarketingData from '~/data/lkMarketingm.json'

export default {
  components: {
    Header, Footer
  },
  head() {
    return {
      title: '来客营销平台'
    }
  },
  data() {
    return {
      showChannel: 0,
      currnetServiceIndex: 0,
      currnetChannelIndex: 0,
      currnetPlaformIndex: 0,
      lkMarketing: lkMarketingData,
      channelByjd: [
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/jdf.png', name: '京东金融'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/qqIcon.png', name: '腾讯'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/baidu.png', name: '百度'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/toutiao.png', name: '今日头条'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/qiy.png', name: '爱奇艺'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/sina.png', name: '新浪'},
      ],
      channelByAll: [
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/qqcomIcon.png', name: '腾讯网'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/wangyi.png', name: '网易'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/sohu.png', name: '搜狐'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/ifengcom.png', name: '凤凰网'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/eastmoney.png', name: '东方财富'},
        {logo: 'https://storage.jd.com/jdlk-website/lkmarketing/peoplecn.png', name: '人民网'},
      ],
      platformInfoList: [
        {
          title: '来客楼宇通',
          info: '依托京东大数据和AI能力，精准匹配线上、线下人群；实现线上线下一致的投放体验；以京X计划为基础，汇聚众多头部优质媒体流量，帮助广告主快速触达全网十亿级用户；创新的线下“楼宇画像”，让线下广告投放真正实现精准定向。',
          img: 'https://storage.jd.com/jdlk-website/lkmarketingm/lytplatform.png',
          cardInfoList: [
            {
              title: '一体化解决方案',
              desc: 'DSP+DMP+SSP成熟系统方案',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/plan-icon.png'
            },
            {
              title: '多纬度投放支持',
              desc: '人群+楼宇多维度定向投放支持',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/mutilSupport-icon.png'
            },
            {
              title: '实时监测',
              desc: '实时投放效果监测',
              icon: 'https://storage.jd.com/jdlk-website/hardware/chart-icon.png'
            },
            {
              title: '效果报告',
              desc: '独有的投放效果报告',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/report-icon.png'
            },
          ]
        },
        {
          title: '来客DSP平台',
          info: '京东来客DSP平台，是由来客团队自主研发基于京东大数据对接全网流量的线上广告投放平台。广告主可针对目标人群实现线上广告的精准投放，并实时监测广告投放效果。',
          img: 'https://storage.jd.com/jdlk-website/lkmarketingm/dspplatform.png',
          cardInfoList: [
            {
              title: '数据沉淀',
              desc: '8亿真实用户数据沉淀',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/database-icon.png'
            },
            {
              title: '多维特征',
              desc: '2000+标签定向目标用户多维特征',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/mutilFeature-icon.png'
            },
            {
              title: '数据跟踪',
              desc: '针对目标用户精准营销，营销后链路数据追踪',
              icon: 'https://storage.jd.com/jdlk-website/lkmarketing/data-line.png'
            }
          ]
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    changeCurrentIndex(index) {
      this.currnetServiceIndex = index
    },
    upCurrentIndex() {
      let {currnetServiceIndex} = this
      this.currnetServiceIndex = currnetServiceIndex > 1 ? 0 : ++currnetServiceIndex
    },
    downCurrentIndex() {
       let {currnetServiceIndex} = this
      this.currnetServiceIndex = currnetServiceIndex < 1 ? 2 : --currnetServiceIndex
    },
    changeChannel(index) {
      this.currnetChannelIndex = index
    },
    changePlaform(index) {
      this.currnetPlaformIndex = index
    },
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>

