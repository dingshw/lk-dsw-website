<template>
  <div>
    <Header activeMenu="微信营销平台"/>
    <div class="main">
      <div class="main-header-m">
        <img src="https://storage.jd.com/jdlk-website/wxmarketingm/wxmarketingbg-m.png" alt="智能硬件" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">微信营销平台</h1>
          <h2 class="main-header-info">基于微信小程序的互动式营销工具</h2>
        </div>
      </div>
      <div class="wx-platform">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/platform-bg-m.png" alt="活动营销平台"/>
          <h4>活动营销平台</h4>
        </div>
        <div class="underline-m"></div>
        <div class="wx-platform-info">
          <h4>来客有礼</h4>
          <h5>助力品牌推广，拉动用户增长，促进销售转化</h5>
          <img class="lkyl-bg-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/lkyl-bg-m.png" alt="来客有礼"/>
          <img class="lkyl-scan-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/lkyl-scan-m.png" alt="来客有礼二维码"/>
          <img class="sale-platform-bg-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/sale-platform-bg-m.png" alt="来客有礼"/>
          <h6>
            “来客有礼”小程序是京东来客出品的一款方便快捷的拉新促活、品牌营销工具，品牌主和商家提供奖品，用户通过抽奖、签到、集赞、集能量、送豆得豆等形式参与互动，丰富的图文信息展示，有效的分享裂变机制，引导用户进入商家店铺/小程序/公众号/微信个人号，同时还有关注店铺的功能，可以提升品牌知名度，增加店铺引流和店铺关注数，并带来销售转化。
          </h6>
        </div>
      </div>
      <div class="wx-user-spread">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/user-icon-m.png" alt="用户分布"/>
          <h4 class="title-text">用户分布</h4>
        </div>
        <div class="underline-m"></div>
        <div class="wx-user-lkyl"><h4>来客有礼</h4></div>
        <div class="wx-user-data">
          <div class="wx-user-data-center">
            <h3><span>10</span>亿</h3>
            <h4>微信生态用户</h4>
          </div>
          <div class="user-line"></div>
          <div class="wx-user-data-center">
            <h3><span>40</span>万+</h3>
            <h4>日均UV</h4>
          </div>
          <div class="user-line"></div>
          <div class="wx-user-data-center">
            <h3><span>300</span>万+</h3>
            <h4>日均PV</h4>
          </div>
        </div>
        <div class="wx-user-data">
          <div class="wx-user-data-center">
            <h3><span>10</span>家</h3>
            <h4>日均合作商家</h4>
          </div>
          <div class="user-line"></div>
          <div class="wx-user-data-center">
            <h3><span>450</span>万</h3>
            <h4>来客有礼用户数</h4>
          </div>
          <div class="user-line"></div>
          <div class="wx-user-data-center">
            <h3><span>100</span>个</h3>
            <h4>合作公众</h4>
          </div>
        </div>
        <div class="wx-user-data">
          <div class="wx-user-data-center">
            <h3><span>5000</span>万</h3>
            <h4>合作公众号覆盖用户数</h4>
          </div>
          <div class="user-line"></div>
          <div class="wx-user-data-center">
            <h3><span class="wx-user-data-center-text">多样化</span></h3>
            <h4>抽奖、签到、广告等</h4>
          </div>
        </div>
        <div class="wx-spread-lkyl">
          <h3>来客有礼450万用户分布情况</h3>
          <div class="wx-spread-chart">
            <h4 class="chart-title-1">{{userDistList[0].name}}</h4>
            <h4 class="chart-title-2">{{userDistList[1].name}}</h4>
            <div class="spread-chart-item">
              <BarChart :dataList="userDistList[0].dataList" width="140px" height="131px" :left=42></BarChart>
              <PieChart :dataList="userDistList[1].dataList" width="141px" height="131px"></PieChart>
            </div>
          </div>
          <div class="wx-spread-chart">
            <h4 class="chart-title-1">{{userDistList[2].name}}</h4>
            <h4 class="chart-title-2">{{userDistList[3].name}}</h4>
            <div class="spread-chart-item">
              <PieChart :dataList="userDistList[2].dataList" width="141px" height="131px"></PieChart>
              <BarChart :dataList="userDistList[3].dataList" width="140px" height="131px" :left=52></BarChart>
            </div>
          </div>
        </div>
      </div>
      <div class="wx-service">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/wxmarketingm/service-bg-icon-m.png" alt="服务介绍"/>
          <h4>服务介绍</h4>
        </div>
        <div class="underline-m"></div>
        <div class="wx-service-card-list">
          <div class="wx-service-card" v-for="(item, index) in channelList" :key="index" v-if="index<showChannelLength">
            <img class="wx-service-card-bg" :src="item.bg" :alt="item.name"/>
            <h3>{{item.name}}</h3>
            <h4>{{item.desc}}</h4>
          </div>
        </div>
        <div v-if="showChannelLength!==5" class="wx-service-showmore" @click="showMore()"><h6>查看更多</h6><img src="https://storage.jd.com/jdlk-website/wxmarketingm/showmore-m.png" alt="查看更多"/></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/m-header/head";
import Footer from "~/components/m-footer/footer";
import BarChart from "~/components/barChart";
import PieChart from "~/components/piechartM";
import { debuglog } from "util";
export default {
  components: {
    Header,
    Footer,
    BarChart,
    PieChart
  },
  head() {
    return {
      title: "来客营销平台"
    };
  },
  data() {
    return {
      currentCicle: 0,
      showChannelLength: 3,
      userDistList: [
        {
          name: "城市",
          dataList: {
            xData: ["6.河南", "5.四川", "4.山东", "3.北京", "2.江苏", "1.广东"],
            yData: [25, 30, 40, 50, 55, 80]
          },
          type: "bar"
        },
        {
          name: "平台",
          dataList: [
            { value: 25, name: "ios" },
            { value: 75, name: "Android" }
          ],
          type: "pie"
        },
        {
          name: "性别",
          dataList: [{ value: 50, name: "女性" }, { value: 50, name: "男性" }],
          type: "pie"
        },
        {
          name: "年龄",
          dataList: {
            xData: [
              "50岁以上",
              "40-49岁",
              "30-39岁",
              "25-29岁",
              "18-24岁",
              "17岁以下"
            ],
            yData: [15, 40, 80, 78, 90, 10]
          },
          type: "bar"
        }
      ],
      channelList: [
        {
          name: "品牌曝光",
          bg: "https://storage.jd.com/jdlk-website/wxmarketingm/brand-bg-m.png",
          desc:
            "多入口品牌曝光：首页品牌曝光、活动详情页品牌曝光、轮播图品牌曝光、活动通知二次曝光、分享界面曝光、优惠券/代金券品牌曝光。邀请好友助力，提升品牌呈指数级曝光。"
        },
        {
          name: "拉新促活",
          bg: "https://storage.jd.com/jdlk-website/wxmarketingm/lachine-bg-m.png",
          desc:
            "用户参与抽奖活动后，提供入口引导用户前往品牌主的小程序、公众号和商城。另外口令抽奖方式主动引导用户前往指定公众号获取密令，直接促进公众号拉新。"
        },
        {
          name: "销售转化",
          bg: "https://storage.jd.com/jdlk-website/wxmarketingm/sale-bg-m.png",
          desc:
            "用户参与抽奖后，引导用户前往店铺小程序、京东店铺、云集和有赞店铺，有助于销售转化。"
        },
        {
          name: "优惠券激励",
          bg: "https://storage.jd.com/jdlk-website/wxmarketingm/coupon-bg-m.png",
          desc:
            "参与用户未中奖，平台将会下发商家优惠券或代金券，引导用户到店消费使用。"
        },
        {
          name: "数据魔方",
          bg: "https://storage.jd.com/jdlk-website/wxmarketingm/data-bg-m.png",
          desc:
            "提供详尽的活动数据分析：包括参与/访问/转发人数、流量来源、页面停留时间、链接跳转数、优惠券核销信息等，帮助商家更好的运营。"
        }
      ]
    };
  },
  mounted() {
  },
  
  methods: {
    showMore() {
      this.showChannelLength = 5
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>