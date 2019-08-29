<template>
  <div>
    <Header activeMenu="微信营销平台"/>
    <div class="main">
      <div class="main-header">
        <img src="https://storage.jd.com/jdlk-website/wxmarketing/wxmarketingbg.png" alt="智能硬件" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">微信营销平台</h1>
          <h2 class="main-header-info">基于微信小程序的互动式营销工具</h2>
        </div>
      </div>
      <div class="wx-platform">
        <img class="wx-platform-bg" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-platform-bg.png" alt="活动营销平台"/>
        <div>
          <div class="title-bgtext">
          <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-platform.png" alt="活动营销平台"/>
          <h4>活动营销平台</h4>
        </div>
        <div class="underline"></div>
        <div class="wx-platform-main">
          <img src="https://storage.jd.com/jdlk-website/hardware/douhao1.png" alt="来客"/>
          <div class="item-cardandimg">
            <div class="message-item card-left">
              <h4>来客有礼</h4>
              <h5>助力品牌推广，拉动用户增长，促进销售转化</h5>
              <h6>
                “来客有礼”小程序是京东来客出品的一款方便快捷的拉新促活、品牌营销工具，品牌主和商家提供奖品，用户通过抽奖、签到、集赞、集能量、送豆得豆等形式参与互动，丰富的图文信息展示，有效的分享裂变机制，引导用户进入商家店铺/小程序/公众号/微信个人号，同时还有关注店铺的功能，可以提升品牌知名度，增加店铺引流和店铺关注数，并带来销售转化。
              </h6>
            </div>
            <div class="img-right">
              <img class="lkyl-code" src="https://storage.jd.com/jdlk-website/wxmarketing/lkyl-code.png" alt="来客有礼二维码"/>
              <img src="https://storage.jd.com/jdlk-website/wxmarketing/lkyl.png" alt="来客有礼"/>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="wx-user">
        <img class="wx-user-bg" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-userbg.png" alt="来客有礼用户"/>
        <div class="wx-user-main">
          <div class="title-bgtext">
            <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-User.png" alt="活动营销平台"/>
            <h4 class="wx-user-text">用户分布</h4>
          </div>
          <div class="underline"></div>
          <div class="wx-user-ciclelist">
            <img class="cicle-line" src="https://storage.jd.com/jdlk-website/wxmarketing/cicle-line.png" alt="来客有礼用户分布"/>
            <div 
              class="cicle"
              :class="[item.cicleClass]"
              v-for="(item, index) in userList"
              :key="index"
            >
              <div class="cicle-bg"></div>
              <h5>
                <span class="wx-user-strong" :class="item.strongName==='多样化' && 'wx-user-strong-s'">{{item.strongName}}</span>
                {{item.unit||''}}
              </h5>
              <h6>{{item.desc}}</h6>
            </div>
            <div class="cicle-center">
              <div class="lightPointBox left">
                <div class="point1 center"></div>
                <div class="point2 center"></div>
                <div class="point3 center"></div>
              </div>
              <div class="lightPointBox right">
                <div class="point1 center"></div>
                <div class="point2 center"></div>
                <div class="point3 center"></div>
              </div>
              <img class="cicle-rotate-outer" src="https://storage.jd.com/jdlk-website/wxmarketing/cicle-rotate-outer.png" alt="来客有礼外圈"/>
              <img class="cicle-rotate-inner" src="https://storage.jd.com/jdlk-website/wxmarketing/cicle-rotate-inner.png" alt="来客有礼内圈"/>
              <img class="cicle-inner" src="https://storage.jd.com/jdlk-website/wxmarketing/cicle-inner.png" alt="来客有礼静态圈"/>
              <h4 class="cicle-inner-text">来客有礼</h4>
            </div>
          </div>
          <div class="user-dist" ref="userDist">
            <h4>来客有礼450万用户分布情况</h4>
            <div class="user-dist-bg">
              <div 
                class="user-dist-item"
                v-for="(item, index) in userDistList"
                :key="index"
              >
                <h4>{{item.name}}</h4>
                <div class="chart-item">
                  <BarChart v-if="item.type==='bar'" :dataList="item.dataList" :left="index===0 ? 55 : 68"></BarChart>
                  <PieChart v-if="item.type==='pie'" :dataList="item.dataList" ></PieChart>
                </div>
                <div class="user-dist-line" v-if="index<userDistList.length-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wx-service">
        <img class="wx-service-bg" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-service-bg.png" alt="来客有礼用户"/>
        <div class="wx-service-main">
          <div class="title-bgtext">
            <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/wxmarketing/wx-service.png" alt="服务介绍"/>
            <h4>服务介绍</h4>
          </div>
          <div class="underline"></div>
          <h5 class="service-channel">品牌推广新渠道</h5>
          <div class="channel-list">
            <div class="channel-item" 
              v-for="(item, index) in channelList"
              :key="index"
            >
              <div class="channel-fill"></div>
              <img class="channel-bg" :src="item.bg" :alt="item.name"/>
              <img class="channel-icon" :src="item.icon" :alt="item.name"/>
              <h5>{{item.name}}</h5>
              <div class="channel-fill-line"></div>
              <h6>{{item.desc}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../../../components/header/head";
import Footer from "../../../components/footer/footer";
import BarChart from "../../../components/barChart";
import PieChart from "../../../components/pieChart";
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
      userList: [
        {
          strongName: "10",
          unit: "亿",
          desc: "微信生态用户",
          cicleClass: "cicle1"
        },
        {
          strongName: "450",
          unit: "万",
          desc: "来客有礼用户数",
          cicleClass: "cicle2"
        },
        { strongName: "40", unit: "万", desc: "日均UV", cicleClass: "cicle3" },
        {
          strongName: "100",
          unit: "个",
          desc: "合作公众",
          cicleClass: "cicle4"
        },
        {
          strongName: "300",
          unit: "万+",
          desc: "日均PV",
          cicleClass: "cicle5"
        },
        {
          strongName: "5000",
          unit: "万",
          desc: "合作公众号覆盖用户数",
          cicleClass: "cicle6"
        },
        {
          strongName: "10",
          unit: "家",
          desc: "日均合作商家",
          cicleClass: "cicle7"
        },
        {
          strongName: "多样化",
          unit: "",
          desc: "抽奖、签到、广告等",
          cicleClass: "cicle8"
        }
      ],
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
          icon: "https://storage.jd.com/jdlk-website/wxmarketing/brandicon.png",
          bg: "https://storage.jd.com/jdlk-website/wxmarketing/brandbg.png",
          desc:
            "多入口品牌曝光：首页活动品牌曝光、活动详情页品牌曝光、轮播图品牌曝光、活动通知二次曝光、分享界面曝光、优惠券/代金券品牌曝光。邀请好友助力，提升品牌呈指数级曝光。"
        },
        {
          name: "拉新促活",
          icon:
            "https://storage.jd.com/jdlk-website/wxmarketing/lachineicon.png",
          bg: "https://storage.jd.com/jdlk-website/wxmarketing/lachinebg.png",
          desc:
            "用户参与抽奖活动后，提供入口引导用户前往品牌主的小程序、公众号和商城。另外口令抽奖方式主动引导用户前往指定公众号获取密令，直接促进公众号拉新。"
        },
        {
          name: "销售转化",
          icon: "https://storage.jd.com/jdlk-website/wxmarketing/saleicon.png",
          bg: "https://storage.jd.com/jdlk-website/wxmarketing/salebg.png",
          desc:
            "用户参与抽奖后，引导用户前往店铺小程序、京东店铺、云集和有赞店铺，有助于销售转化。"
        },
        {
          name: "优惠券激励",
          icon: "https://storage.jd.com/jdlk-website/wxmarketing/couponicon.png",
          bg: "https://storage.jd.com/jdlk-website/wxmarketing/couponbg.png",
          desc:
            "参与用户未中奖，平台将会下发商家优惠券或代金券，引导用户到店消费使用。"
        },
        {
          name: "数据魔方",
          icon: "https://storage.jd.com/jdlk-website/wxmarketing/dataicon.png",
          bg: "https://storage.jd.com/jdlk-website/wxmarketing/databg.png",
          desc:
            "提供详尽的活动数据分析：包括参与/访问/转发人数、流量来源、页面停留时间、链接跳转数、优惠券核销信息等，帮助商家更好的运营。"
        }
      ]
    };
  },
  mounted() {
  },
  
  methods: {
  }
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>