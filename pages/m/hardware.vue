<template>
	<div>
		<Header activeMenu="智能硬件"/>
    <div class="main">
      <div class="main-header-m">
        <img :src="hardware.banner.mimg" :alt="hardware.banner.title" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">{{hardware.banner.title}}</h1>
          <div class="main-header-info">{{hardware.banner.info}}</div>
        </div>
      </div>
      <div class="hardware-device">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" :src="hardware.device.titleIcon" :alt="hardware.device.title"/>
          <h4>{{hardware.device.title}}</h4>
        </div>
        <div class="underline-m"></div>
        <div class="device-terminal">
          <div class="device-terminal-title">
            <div @click="changeDevice(0)" class="device-terminal-title-item">
              <h3 :class="deviceIndex===0 && 'title-active'">{{hardware.device.aiTerminal.title}}</h3>
              <div class="title-line" :class="deviceIndex===0 && 'title-line-active'"></div>
            </div>
            <div @click="changeDevice(1)" class="device-terminal-title-item">
              <h3 :class="deviceIndex===1 && 'title-active'">{{hardware.device.managePlatform.title}}</h3>
              <div class="title-line" :class="deviceIndex===1 && 'title-line-active'"></div>
            </div>
          </div>
          <div class="device-info">
            <div class="title">{{deviceInfoList[deviceIndex].title}}</div>
            <div class="info">{{deviceInfoList[deviceIndex].info}}</div>
            <div :class="'img-'+deviceIndex"><img :src="deviceInfoList[deviceIndex].img" :alt="deviceInfoList[deviceIndex].title"/></div>
            <div class="card-item" :class="'card-item-'+deviceIndex">
              <div class="card-info" v-for="(item, index) in deviceInfoList[deviceIndex].cardInfoList" :key="index">
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
      <div class="hardware-terminal">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" :src="hardware.terminal.titleIcon" :alt="hardware.terminal.title"/>
          <h4>{{hardware.terminal.title}}</h4>
        </div>
        <div class="underline-m"></div>
        <div class="terminal-item-list swiper-container">
          <div 
            style="transform: translate3d(60.5px, 0px, 0px);"
            class="swiper-wrapper" ref="terminalSwiper">
            <div class="swiper-slide terminal-item"
              v-for="(item, index) in terminalList"
              :key="index"
              @touchstart="startTouch($event, index)"
              @touchmove="touchMove($event, index)"
              @touchend="touchEnd($event, index)"
            >
              <img :src="item.bg" :alt="item.name" class="terminal-item-bg"/>
              <div class="terminal-item-size">
                <img :src="item.sizeIcon" :alt="item.name" :class="item.name==='投影'&&'terminal-item-img'"/>
                <span>{{item.sizeInfo}}</span>
              </div>
              <div class="terminal-item-screen">
                <img :src="item.screenBg" :alt="item.name" :class="item.name==='投影'&&'terminal-item-screenBg-shaw'" class="terminal-item-screenBg"/>
              </div>
              <div class="terminal-item-sceneInfo">
                <div >适用场景</div>
                <div >{{item.sceneInfo}}</div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets">
            <span 
              v-for="(item, index) in terminalList" 
              :key="index"
              :class="index===currentTerminal && 'swiper-pagination-bullet-active'"
              class="swiper-pagination-bullet" 
              :tabindex='index' 
              role="button"></span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
	</div>
</template>
<script>
import Header from "../../components/m-header/head";
import Footer from "../../components/m-footer/footer";

import { setInterval, clearInterval } from "timers";
import hardware from "../../data/hardwarem.json";
import { debuglog } from "util";

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "智能硬件"
    };
  },
  data() {
    return {
      deviceIndex: 0,
      deviceInfoList: [
        hardware.device.aiTerminal,
        hardware.device.managePlatform
      ],
      hardware: hardware,
      terminalList: hardware.terminal.terminalDevice.terminalList,
      currentTerminal: 0,
      startX: 0,
      initSwiperLeft: 60.5,
      swiperWidth: 254,
      touchDirection: 'none'
    };
  },
  mounted() {},
  methods: {
    changeDevice(index) {
      this.deviceIndex = index;
    },
    startTouch(e, index) {
      this.startX =  e.changedTouches[0].clientX
    },
    touchMove(e, index) {
      const {initSwiperLeft, startX, swiperWidth} = this
      let touchMoveX = e.changedTouches[0].clientX //滑动变化坐标
      if (touchMoveX > startX){ //右滑
        if(index===0) {
          return;
        }
        if(Math.abs(touchMoveX - startX) > swiperWidth/2) {
          this.touchDirection = 'right'
        } else {
          this.touchDirection = 'none'
        }
      }
      else { //左滑
        if(index===3) {
          return;
        }
        if(Math.abs(touchMoveX - startX) > swiperWidth/2) {
          this.touchDirection = 'left'
        } else {
          this.touchDirection = 'none'
        }
      }
      let moveWidth = 0
      if( Math.abs(touchMoveX - startX) > swiperWidth*(index+1) ) {
        moveWidth = -swiperWidth*(index+1) + initSwiperLeft
        this.$refs['terminalSwiper'].style.transform = `translate3d(${moveWidth}px, 0px, 0px)`
        return;
      } else {
        moveWidth = touchMoveX - startX + initSwiperLeft - swiperWidth*(index)
        this.$refs['terminalSwiper'].style.transform = `translate3d(${moveWidth}px, 0px, 0px)`
      }
    },
    touchEnd(e, index) {
      const {initSwiperLeft, swiperWidth, touchDirection} = this
      if(touchDirection==='left') {
        this.currentTerminal = index > 2 ? 3 : index+1
        this.$refs['terminalSwiper'].style.transform = `translate3d(${-swiperWidth*(this.currentTerminal) + initSwiperLeft}px, 0px, 0px)`
      } else if(touchDirection==='right') {
        this.currentTerminal = index < 1 ? 0 : index-1
        this.$refs['terminalSwiper'].style.transform = `translate3d(${-this.swiperWidth*(this.currentTerminal) + initSwiperLeft}px, 0px, 0px)`
      } else {
        this.$refs['terminalSwiper'].style.transform = `translate3d(${-this.swiperWidth*(this.currentTerminal) + initSwiperLeft}px, 0px, 0px)`
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination-bullets {
    left: 0;
    width: 100%;
    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      display: inline-block;
      border-radius: 100%;
      background:rgba(0,0,0,1);
      opacity:0.1;
      margin: 0 4px;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background:rgba(0,0,0,1);
    }
  }
}
.hardware-device {
  margin: auto;
  overflow: hidden;
  .device-terminal {
    .device-terminal-title {
      width: 325px;
      margin: 26px auto 34px;
      display: flex;
      flex-direction: row;
      text-align: center;
      .device-terminal-title-item {
        flex: 1;
      }
      .title-line {
        margin-top: 13px;
        height: 2px;
        background: rgba(164, 164, 164, 1);
        opacity: 0.2;
      }
      .title-line-active {
        opacity: 1;
        height: 4px;
        margin-top: 11px;
        background: linear-gradient(
          90deg,
          rgba(50, 142, 255, 1) 0%,
          rgba(1, 80, 255, 1) 100%
        );
      }
      h3 {
        font-size: 15px;
        font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(5, 11, 35, 1);
        padding: 0 21px;
        opacity: 0.5;
      }
      .title-active {
        opacity: 1;
      }
    }
    .device-info {
      text-align: center;
      .title {
        margin: 0 25px;
        font-size: 19px;
        font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(5, 11, 35, 1);
      }
      .info {
        text-align: left;
        margin: 19px 25px 16px;
        font-size: 11px;
        font-family:"PingFang SC", "Microsoft YaHei";
        font-weight: 400;
        color: rgba(5, 11, 35, 1);
        opacity: 0.6;
      }
      .img-0 {
        margin: 0 auto;
        width: 159px;
        img {
          width: 100%;
        }
      }
      .img-1 {
        margin: 0 auto;
        width: 277px;
        img {
          width: 100%;
        }
      }
      .card-item-0 {
        margin: 11px auto 0;
      }
      .card-item-1 {
        margin: 46px auto 0;
      }
      .card-item {
        margin: 0 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .card-info {
        width: 132px;
        margin-bottom: 39px;
        text-align: center;
        img {
          width: 44px;
          height: 44px;
          background-size: 100% 100%;
        }
        .card-title {
          font-size: 14px;
          font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
          font-weight: bold;
          color: rgba(5, 11, 35, 1);
          margin-top: 9px;
        }
        .card-message {
          margin-top: 8.5px;
          font-size: 11px;
          font-family:"PingFang SC", "Microsoft YaHei";
          font-weight: 400;
          color: rgba(5, 11, 35, 1);
          opacity: 0.6;
        }
      }
    }
  }
}
.hardware-terminal {
  overflow: hidden;
  height: 529px;
  background-size: 100% 100%;
  background-image: url("http://storage.jd.com/jdlk-website/hardwarem/hardware-terminal-bg1.png");
  .terminal-item-list {
    margin-top: 49px;
    overflow: initial;
    height: 349px;
  }
  .terminal-item {
    margin-right: 15px;
    cursor: pointer;
    width: 254px;
    height: 317px;
    position: relative;
    .terminal-item-bg {
      position: absolute;
      left: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .terminal-item-size {
      margin-top: -11px;
      font-size: 16px;
      font-family:"PingFang SC", "Microsoft YaHei";
      font-weight: 400;
      color: rgba(1, 80, 255, 1);
      opacity: 0.9;
      .terminal-item-img {
        width: 83px;
        height: 43px;
      }
      img {
        width: 61px;
        height: 42px;
      }
    }
    .terminal-item-screen {
      height: 213px;
      position: absolute;
      top: 61px;
      width: 100%;
    }
    .terminal-item-screenBg {
      cursor: pointer;
      position: absolute;
      height: 100%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0px);
    }
    .terminal-item-screenBg-shaw {
      width: 196px;
      height: 133px;
    }
    .terminal-item-sceneInfo {
      position: absolute;
      top: 275px;
      width: 100%;
      text-align: center;
      font-size:11px;
      font-family:"PingFang SC","MicrosoftYaHei";
      font-weight:400;
      color:rgba(5,11,35,1);
      line-height:16px;
      opacity:0.6;
      span {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 1;
        font-weight: bold;
        font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
      }
    }
  }
}
</style>
