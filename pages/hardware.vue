<template>
	<div>
		<Header activeMenu="智能硬件"/>
    <div class="main">
      <div class="main-header">
        <img :src="hardware.banner.img" :alt="hardware.banner.title" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">{{hardware.banner.title}}</h1>
          <div class="main-header-info">{{hardware.banner.info}}</div>
        </div>
      </div>
      <div class="hardware-device">
        <div class="title-bgtext">
          <img class="title-bgIcon" :src="hardware.device.titleIcon" :alt="hardware.device.title"/>
          <h4>{{hardware.device.title}}</h4>
        </div>
        <div class="underline"></div>
        <div class="device-terminal">
          <img src="https://storage.jd.com/jdlk-website/hardware/douhao1.png" alt="ai" class="douhao1"/>
          <div class="terminal-info">
            <div class="message-item terminal-message">
              <h4>{{hardware.device.aiTerminal.title}}</h4>
              <h5>{{hardware.device.aiTerminal.info}}</h5>
              <div class="card-item">
                <div class="card-info" v-for="(item, index) in terminalInfoList" :key="index">
                  <img :src="item.icon" :alt="item.title"/>
                  <div>
                    <div class="card-title">{{item.title}}</div>
                    <div class="card-message">{{item.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="terminal-img">
              <img :src="hardware.device.aiTerminal.img" alt="广告终端"/>
            </div>
          </div>
          <div class="terminal-manage">
            <img class="manage-bg" :src="hardware.device.managePlatform.img" :alt="hardware.device.managePlatform.title"/>
            <div class="manage-info message-item">
              <h4>{{hardware.device.managePlatform.title}}</h4>
              <h5>{{hardware.device.managePlatform.info}}</h5>
              <div class="card-item">
                <div class="card-info" v-for="(item, index) in manageInfoList" :key="index">
                  <img :src="item.icon" :alt="item.title"/>
                  <div>
                    <div class="card-title">{{item.title}}</div>
                    <div class="card-message">{{item.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="https://storage.jd.com/jdlk-website/hardware/douhao2.png" alt="ai" class="douhao2"/>
        </div>
      </div>
      <div class="hardware-terminal">
        <img class="hardware-terminalBg" src="https://storage.jd.com/jdlk-website/hardware/hardware-terminal.png" alt="广告终端"/>
        <div class="hardware-terminal-main">
          <div class="title-bgtext">
            <img class="title-bgIcon" :src="hardware.terminal.titleIcon" :alt="hardware.terminal.title"/>
            <h4>{{hardware.terminal.title}}</h4>
          </div>
          <div class="underline"></div>
          <div class="terminal-main">
            <div class="message-item">
              <h4>{{hardware.terminal.terminalDevice.title}}</h4>
              <h5>{{hardware.terminal.terminalDevice.info}}</h5>
            </div>
            <div>
              <ul class="terminal-type">
                <template
                  v-for="(item, index) in terminalList" 
                >
                  <li 
                    @click="changeChoseIndex(index)" 
                    :class="choseIndex===index && 'active'"
                    :key="index"
                  >{{item.name}}</li>
                  <li :key="item.name" v-if="index!=(terminalList.length-1)">|</li>
                </template>
              </ul>
            </div>
          </div>
          <div class="terminal-list">
            <div 
              class="terminal-item" 
              v-for="(item, index) in terminalList" 
              :key="index"
              @mouseover="stopAction()"
              @mouseout="startAction()"
            >
              <img v-if="choseIndex===index" :src="item.bg" :alt="item.name" class="terminal-item-bg"/>
              <div v-if="choseIndex===index" class="terminal-item-size">
                <img :src="item.sizeIcon" :alt="item.name"/>
                <span>{{item.sizeInfo}}</span>
              </div>
              <div class="terminal-item-screen">
                <img @click="changeChoseIndex(index)" :src="item.screenBg" :alt="item.name" class="terminal-item-screenBg"/>
              </div>
              <div class="terminal-item-sceneInfo">
                <div v-if="choseIndex===index">适用场景</div>
                <div v-if="choseIndex===index">{{item.sceneInfo}}</div>
                <span v-else>{{item.desc}}</span>
              </div>
            </div>
          </div>
          <div class="terminal-list-line">
            <div class="terminal-list-line-active" :style="{'left': choseIndex*30+'px'}"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
	</div>
</template>
<script>
import Header from '../components/header/head'
import Footer from '../components/footer/footer'
import { setInterval, clearInterval } from 'timers';
import hardware from "../data/hardware.json"; 
import { debuglog } from 'util';
let choseIndexInterval = null

export default {
  components: {
    Header, Footer
  },
  head() {
    return {
      title: '智能硬件',
    }
  },
  data() {
    return {
      choseIndex: 0,
      hardware: hardware,
      terminalInfoList: hardware.device.aiTerminal.cardInfoList,
      manageInfoList: hardware.device.managePlatform.cardInfoList,
      terminalList: hardware.terminal.terminalDevice.terminalList
    }
  },
  mounted() {
    // this.playAutoChangeChoseIndex()
  },
  beforeDestroy() {
    // clearInterval(choseIndexInterval)
  },
  methods: {
    changeChoseIndex(index) {
      this.choseIndex = index
    },
    playAutoChangeChoseIndex() {
      // let that = this
      // clearInterval(choseIndexInterval)
      // choseIndexInterval = setInterval(function() {
      //   let choseIndex = that.choseIndex + 1
      //   that.choseIndex = choseIndex%that.terminalList.length
      // }, 1500)
    },
    stopAction() {clearInterval(choseIndexInterval)},
    startAction() {this.playAutoChangeChoseIndex()}
  }
}
</script>
<style lang="scss" scoped>
.message-item {
  width: 757px;
  h4 {
    margin-top: 28px;
    font-size:32px;
    font-family:"PingFang SC","MicrosoftYaHei";
    font-weight:bold;
    color:rgba(5,11,35,1);
  }
  h5 {
    margin-top: 19px;
    font-size:14px;
    font-family:"PingFang SC","MicrosoftYaHei";
    font-weight:400;
    color:rgba(5,11,35,1);
    opacity:0.6;
  }
}
.hardware-device {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  .device-terminal {
    .douhao1 {
      margin: 40px 0 0 46px;
      width: 60px;
      height: 58px;
    }
    .card-item {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .card-info {
      width: 302px;
      height: 64px;
      margin-top: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        background-size: 100% 100%;
        margin-right: 14px;
      }
      .card-title {
        font-size:24px;
        font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";  
        font-weight:bold;
        color:rgba(5,11,35,1);
        margin: 5px 0 0 0;
      }
      .card-message {
        margin: 17px 0 0 0;
        font-size:14px;
        font-family:"PingFang SC","MicrosoftYaHei";
        font-weight:400;
        color:rgba(5,11,35,1);
        opacity:0.6;
      }
    }
    .terminal-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 539px;
      padding-left: 57px;
      .terminal-message {
        width: 63%;
      }
    }
    .terminal-manage {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 155px;
      .manage-info {
        width: 52%;
      }
      .manage-bg {
        height: 347px;
        width: 553px;
      }
    }
    .douhao2 {
      float: right;
      width: 59px;
      height: 57px;
      margin-top: 25px;
    }
  }
}
.hardware-terminal {
  position: relative;
  overflow: hidden;
  margin-top: 49px;
  .hardware-terminalBg {
    position: absolute;
    left: 0;
    top: 0;
    height: 947px;
    width: 100%;
    z-index: -1;
  }
  .hardware-terminal-main {
    max-width: 1225px;
    margin: 0 auto;
    .terminal-main {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      .terminal-type {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        width: 279px;
        li {
          display: inline-block;
          font-size:16px;
          font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
          font-weight:bold;
          color:rgba(5,11,35,1);
          opacity:0.4;
          cursor: pointer;
          &:active {
            color:rgba(5,11,35,1);
            opacity:1;
          }
        }
        .active {
          color:rgba(5,11,35,1);
          opacity:1;
        }
      }
    }
    .terminal-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 44px 0 96px;
      .terminal-item {
        cursor: pointer;
        width: 302px;
        height: 434px;
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
          font-size:16px;
          font-family:"PingFang SC","MicrosoftYaHei";
          font-weight:400;
          color:rgba(1,80,255,1);
          opacity:0.9;
        }
        .terminal-item-screen {
          height: 328px;
          position: absolute;
          top: 61px;
          width: 100%;
        }
        .terminal-item-screenBg {
          cursor: pointer;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0px);
        }
        .terminal-item-sceneInfo {
          position: absolute;
          top: 375px;
          width: 100%;
          text-align: center;
          font-size:14px;
          font-family:"PingFang SC","MicrosoftYaHei";
          font-weight:400;
          color:rgba(5,11,35,1);
          line-height:20px;
          height: 35px;
          opacity:0.6;
          span {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%,0);
            opacity:1;
            font-weight:bold;
            font-family:"PingFang-Bold", "MicrosoftYaHei-Bold";
          }
        }
      }
    }
    .terminal-list-line {
      position: relative;
      margin: 0 auto 70px;
      width:120px;
      height:3px;
      background:rgba(0,0,0,0.1);
      .terminal-list-line-active {
        position: absolute;
        top: 0px;
        left: 0;
        width:30px;
        height:3px;
        background:rgba(0,0,0,1);
        opacity:1;
      }
    }
  }
}
</style>
