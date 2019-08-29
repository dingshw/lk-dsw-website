<template>
  <div>
    <Header activeMenu="来客营销平台"/>
    <div class="main">
      <div class="main-header">
        <img :src="lkMarketing.banner.img" :alt="lkMarketing.banner.title" class="hardwarebg"/>
        <div class="main-header-message">
          <h1 class="main-header-title">{{lkMarketing.banner.title}}</h1>
          <h2 class="main-header-info">{{lkMarketing.banner.info}}</h2>
        </div>
      </div>
      <div class="markering-service">
        <div class="markering-service-type">
          <div class="title-bgtext">
            <img class="title-bgIcon" :src="lkMarketing.service.titleIcon" :alt="lkMarketing.service.title"/>
            <h4>{{lkMarketing.service.title}}</h4>
          </div>
          <div class="underline"></div>
          <ul class="service-list">
            <template v-for="(item, index) in lkMarketing.service.serviceList">
              <li :key="index" @click="changeCurrentIndex(index)">
                <img v-if="currnetServiceIndex===index" :src="item.icon" :alt="item.name"/>
                <img v-if="currnetServiceIndex!==index" :src="item.icon0" :alt="item.name"/>
                <h5>{{item.name}}</h5>
                <div class="underline" :style="{visibility: currnetServiceIndex===index?'visible':'hidden'}"></div>
              </li>
              <div v-if="index<lkMarketing.service.serviceList.length-1" :key="item.name" class="line-comp">
                <div class="line"></div>
                <div class="rightRiangle" :class="{'rightRiangle1': index===0, 'rightRiangle2': index===1 }"></div>
              </div>
            </template>
          </ul>
          <div class="service-item" @mouseover="stopAction()" @mouseout="startAction()">
            <img class="service-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/serviceBg.png" alt="服务介绍"/>
            <div class="service-main">
              <img :class="`numIcon${currnetServiceIndex}`" :src="lkMarketing.service.serviceList[currnetServiceIndex].numIcon" :alt="lkMarketing.service.serviceList[currnetServiceIndex].name"/>
              <h4>{{lkMarketing.service.serviceList[currnetServiceIndex].name}}</h4>
              <h5>{{lkMarketing.service.serviceList[currnetServiceIndex].desc}}</h5>
              <div class="service-body" v-if="currnetServiceIndex===0">
                <div class="service-category-list">
                  <div class="service-category"
                    v-for="(item, index) in lkMarketing.service.serviceList[0].categoryList"
                    :key="index"
                  >
                    <h3><span>{{item.num}}</span>{{item.unit}}</h3>
                    <h4>{{item.name}}</h4>
                  </div>
                </div>
                <div class="service-category-line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="93px" height="140px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0 C58 24 38 127 93,140" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceCategory1"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceCategory1"/>
                        </animateMotion>
                    </circle>
                  </svg>
                  <div class="cicle-point cicle-category"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="93px" height="140px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 140 C84 64 25 18 93,-2" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceCategory2"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceCategory2"/>
                        </animateMotion>
                    </circle>
                  </svg>
                </div>
                <div class="service-category-all">
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
                  <img class="outer-cicle" src="https://storage.jd.com/jdlk-website/lkmarketing/service-category-all.png" alt="每日产生"/>
                  <div class="inner-cicle">
                    <h4>{{lkMarketing.service.serviceList[0].categoryAll.name}}</h4>
                    <h5>
                      <span>{{lkMarketing.service.serviceList[0].categoryAll.num}}</span>
                      <div>{{lkMarketing.service.serviceList[0].categoryAll.unit}}<div>{{lkMarketing.service.serviceList[0].categoryAll.unitText}}</div></div>
                    </h5>
                    <h6>{{lkMarketing.service.serviceList[0].categoryAll.info}}</h6>
                  </div>
                </div>
                <div class="service-all-line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="87px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 88 C79 65 29 9 150,0" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceAll1"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceAll1"/>
                        </animateMotion>
                    </circle>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="87px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M-4 -4 C62 2 43 92 150,81" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceAll2"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceAll2"/>
                        </animateMotion>
                    </circle>
                  </svg>
                </div>
                <div class="service-ai-analys">
                  <h5 class="analys-info analys-demind">{{lkMarketing.service.serviceList[0].aiAnalys[0]}}</h5>
                  <h5 class="analys-info analys-feature">{{lkMarketing.service.serviceList[0].aiAnalys[1]}}</h5>
                  <img class="service-ai-outer" src="https://storage.jd.com/jdlk-website/lkmarketing/service-ai-outer.png" alt="AI人群分析"/>
                  <div class="service-ai-inner">
                    <div class="service-ai-inner-cicle">
                      <div class="service-ai-scan"></div>
                    </div>
                    <h4>{{lkMarketing.service.serviceList[0].aiName}}</h4>
                  </div>
                </div>
                <div class="service-ai-line">
                  <div class="cicle-point cicle-pointAI"></div>
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
                </div>
                <h4 class="service-people"><div class="people-text">{{lkMarketing.service.peopleName}}</div></h4>
              </div>
              <div class="service-body" v-if="currnetServiceIndex===1">
                <h4 class="service-people"><div class="people-text">{{lkMarketing.service.peopleName}}</div></h4>
                <div class="service-touchuser-line">
                  <div class="cicle-point cicle-people"></div>
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
                </div>
                <div class="service-touchuser">
                  <img class="service-touchuser-outer" src="https://storage.jd.com/jdlk-website/lkmarketing/touchuserouter.png" alt="用户触达"/>
                  <div class="service-touchuser-inner">
                    <img class="service-touchuser-inner-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/touchuserinner.png" alt="用户触达"/>
                    <img class="service-touchuser-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/touchusericon.png" alt="用户触达"/>
                    <h4>用户触达</h4>
                  </div>
                </div>
                <div class="service-channel-line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="136px" height="99px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 99 C82 92 39 28 136,0" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceAll1"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceAll1"/>
                        </animateMotion>
                    </circle>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="136px" height="99px">
                    <path xmlns="http://www.w3.org/2000/svg" d="M4 -4 C74 6 43 61 136,96" stroke="rgba(255,255,255,0)" stroke-dasharray="5,5" stroke-width="1" fill="none" id="serviceAll2"/>
                    <circle xmlns="http://www.w3.org/2000/svg" r="2" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#serviceAll2"/>
                        </animateMotion>
                    </circle>
                  </svg>
                  <div class="lightPointBox left">
                    <div class="point1 center"></div>
                    <div class="point2 center"></div>
                    <div class="point3 center"></div>
                  </div>
                  <div class="lightPointBox right1">
                    <div class="point1 center"></div>
                    <div class="point2 center"></div>
                    <div class="point3 center"></div>
                  </div>
                  <div class="lightPointBox right2">
                    <div class="point1 center"></div>
                    <div class="point2 center"></div>
                    <div class="point3 center"></div>
                  </div>
                </div>
                <div class="service-channel">
                  <div class="service-channel-bg service-channel-online">
                    <h4>线上渠道</h4>
                    <div class="channel-title">
                      <h5 class="channel-title1">DSP平台对接主流线上媒体</h5>
                      <h5>精准的人群定向投放</h5>
                    </div>
                    <ul class="online-list">
                      <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-wx.png" alt="微信"/><h5>微信</h5></li>
                      <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-wb.png" alt="微博"/><h5>微博</h5></li>
                      <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-jd.png" alt="京东"/><h5>京东</h5></li>
                      <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-toutiao.png" alt="今日头条"/><h5>今日头条</h5></li>
                      <li><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-other.png" alt="其他"/><h5></h5></li>
                    </ul>
                  </div>
                  <div class="service-channel-bg service-channel-underline">
                    <h4>线下渠道</h4>
                    <div class="channel-title">
                      <h5 class="channel-title1">基于收货地址匹配用户信息</h5>
                      <h5>定位目标人群密度最高的楼宇</h5>
                    </div>
                    <div class="underline-list">
                      <div class="underline-item">
                        <h5>多种关注标签</h5>
                        <div class="underline-item-tag">
                          <h5>母婴用品</h5>
                          <div class="tag-line"></div>
                          <h5>手机数码</h5>
                          <div class="tag-line"></div>
                          <h5>户外运动</h5>
                        </div>
                      </div>
                      <div class="underline-item">
                        <h5>多种用户信息</h5>
                        <div class="underline-item-tag">
                          <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-sex.png" alt="性别"/>性别</h5>
                          <div class="tag-line"></div>
                          <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-married.png" alt="已婚"/>已婚</h5>
                          <div class="tag-line"></div>
                          <h5><img src="https://storage.jd.com/jdlk-website/lkmarketing/channel-money.png" alt="消费"/>消费</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="service-body" v-if="currnetServiceIndex===2">
                <div class="service-launch">
                  <h4>广告投放</h4>
                </div>
                <div class="service-launch-line">
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
                  <div class="cicle-point cicle-launch"></div>
                </div>
                <h4 class="service-launch-data">结案数据</h4>
                <div class="service-data-bank">
                  <h4>专属数据银行</h4>
                  <div class="data-bank">
                    <div class="data-store">
                      <img class="data-store-outer" src="https://storage.jd.com/jdlk-website/lkmarketing/data-store-outer.png" alt="数据仓库"/>
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
                      <img class="data-model-line" src="https://storage.jd.com/jdlk-website/lkmarketing/data-model-line.png" alt="投放数据模型"/>
                      <img class="data-model-cube1" src="https://storage.jd.com/jdlk-website/lkmarketing/cube-icon.png" alt="投放数据模型"/>
                      <img class="data-model-cube2" src="https://storage.jd.com/jdlk-website/lkmarketing/cube-icon.png" alt="投放数据模型"/>
                      <img class="data-model-cube3" src="https://storage.jd.com/jdlk-website/lkmarketing/cube-icon.png" alt="投放数据模型"/>
                    </div>
                  </div>
                </div>
                <div class="launch-policy-line" >
                  <div class="cicle-point cicle-policy"></div>
                </div>
                <div class="launch-policy">投放策略修正</div>
              </div>
            </div>
            <div class="service-item-line">
              <div class="change-list-line"><div class="change-list-line-active" :style="{'left': currnetServiceIndex*30+'px'}"></div></div>
              <div class="change-list-text">0{{currnetServiceIndex+1}}/03</div>
            </div>
          </div>
          <div class="market-channel"> 
            <img class="channel-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/market-channel.png" alt="渠道能力"/>
            <div class="market-channel-main">
              <div class="title-bgtext">
                <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/lkmarketing/contactus.png" alt="硬件设备"/>
                <h4>线上/线下渠道能力</h4>
              </div>
              <div class="underline"></div>
              <div class="channel-list" v-if="showChannel===0">
                <div class="channel-card" @click="changeChannelIndex(0)">
                  <div class="channel-card-title">
                    <img class="channel-card-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/onlinechannel.png" alt="线上渠道"/>
                    <h4>线上渠道能力</h4>
                    <h5>打通了全网媒介渠道路径，通过来客DSP平台对接了线上各类核心头部媒体，并打通媒介数据链路，实现线上广告的精准定向投放。保证客户广告全网最大化的精准曝光</h5>
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
                <div class="channel-message" @click="changeChannelIndex(1)">
                  <h4>线下</h4>
                  <h4>渠道能力</h4>
                  <div class="channel-message-line"></div>
                  <h5>来客线下屏幕网络，已经基本覆盖国内百余个一线及二线城市，覆盖小区29279个、写字楼5151座，共计56.6万部楼宇广告设备。</h5>
                  <img class="channel-line" src="https://storage.jd.com/jdlk-website/lkmarketing/channel-arrow.png" alt="线下渠道能力"/>
                </div>
              </div>
              <div class="channel-list" v-if="showChannel===1">
                <div class="channel-message" @click="changeChannelIndex(0)">
                  <h4>线上</h4>
                  <h4>渠道能力</h4>
                  <div class="channel-message-line"></div>
                  <h5>打通了全网媒介渠道路径，通过来客DSP平台对接了线上各类核心头部媒体，并打通媒介数据链路，实现线上广告的精准定向投放。保证客户广告全网最大化的精准曝光。</h5>
                  <img class="channel-line" src="https://storage.jd.com/jdlk-website/lkmarketing/channel-arrow.png" alt="线下渠道能力"/>
                </div>
                <div class="channel-card" @click="changeChannelIndex(1)">
                  <div class="channel-card-title">
                    <img class="channel-card-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/onlinechannel.png" alt="线上渠道"/>
                    <h4>线下渠道能力</h4>
                    <h5>来客线下屏幕网络，已经基本覆盖国内百余个一线及二线城市，覆盖小区29279个、写字楼5151座，共计56.6万部楼宇广告设备。</h5>
                  </div>
                  <div class="channel-card-body">
                    <div class="channel-card-item">
                      <h5>面向主流一二线城市</h5>
                      <img class="citymap" src="https://storage.jd.com/jdlk-website/lkmarketing/citymap.png" alt="主流城市"/>
                      <img class="city1" src="https://storage.jd.com/jdlk-website/lkmarketing/city1bg.png" alt="北京"/>
                      <h6 class="city1-text">北京、上海、广州、深圳</h6>
                      <img class="city2" src="https://storage.jd.com/jdlk-website/lkmarketing/city2bg.png" alt="杭州"/>
                      <h6 class="city2-text">杭州、西安、青岛</h6>
                      <img class="city3" src="https://storage.jd.com/jdlk-website/lkmarketing/city3bg.png" alt="济南"/>
                      <h6 class="city3-text">济南</h6>
                    </div>
                    <div class="channel-card-item">
                      <h5>针对主要消费人群，覆盖核心生活场景</h5>
                      <img class="channel-life-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/lifescenebg.png" alt="生活场景"/>
                      <img class="channel-office-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/officebg.png" alt="写字楼"/>
                      <img class="channel-office-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/officeicon.png" alt="写字楼"/>
                      <h6 class="channel-office-text">写字楼</h6>
                      <img class="channel-house-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/housebg.png" alt="住宅"/>
                      <img class="channel-house-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/houseIcon.png" alt="住宅"/>
                      <h6 class="channel-house-text">住宅</h6>
                      <img class="channel-market-bg" src="https://storage.jd.com/jdlk-website/lkmarketing/marketbg.png" alt="商场"/>
                      <img class="channel-market-icon" src="https://storage.jd.com/jdlk-website/lkmarketing/markeyicon.png" alt="商场"/>
                      <h6 class="channel-market-text">商场</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message-card">
            <div class="title-bgtext">
              <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/hardware/hardwareDevice.png" alt="硬件设备"/>
              <h4>平台产品介绍</h4>
            </div>
            <div class="underline"></div>
            <div>
              <img src="https://storage.jd.com/jdlk-website/hardware/douhao1.png" alt="ai" class="douhao1"/>
              <div class="item-cardandimg">
                <div class="message-item card-left">
                  <h4>来客楼宇通</h4>
                  <h5>依托京东大数据和AI能力，精准匹配线上、线下人群；实现线上线下一致的投放体验；以京X计划为基础，汇聚众多头部优质媒体流量，帮助广告主快速触达全网十亿级用户；创新的线下“楼宇画像”，让线下广告投放真正实现精准定向。</h5>
                  <div class="card-item">
                    <div class="card-info" v-for="(item, index) in paltformInfoList" :key="index">
                      <img :src="item.icon" :alt="item.title"/>
                      <div>
                        <div class="card-title">{{item.title}}</div>
                        <div class="card-message">{{item.desc}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="img-right">
                  <img src="https://storage.jd.com/jdlk-website/lkmarketing/lytplatform.png" alt="来客楼宇通"/>
                </div>
              </div>
              <div class="item-imgandcard">
                <img class="img-left" src="https://storage.jd.com/jdlk-website/lkmarketing/dspplatform.png" alt="来客DSP平台"/>
                <div class="message-item card-right">
                  <h4>来客DSP平台</h4>
                  <h5>京东来客DSP平台，是由来客团队自主研发基于京东大数据对接全网流量的线上广告投放平台。广告主可针对目标人群实现线上广告的精准投放，并实时监测广告投放效果。</h5>
                  <div class="card-item">
                    <div class="card-info" v-for="(item, index) in dspPlatformInfoList" :key="index">
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
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '../../../components/header/head'
import Footer from '../../../components/footer/footer'
import lkMarketing from '../../../data/lkMarketing.json';
import { setInterval, clearInterval } from 'timers';

let choseIndexInterval = null
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
      lkMarketing: lkMarketing,
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
      paltformInfoList: [
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
      ],
      dspPlatformInfoList: [
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
        
      ],
    }
  },
  mounted() {
    this.playAutoAction()
  },
  destroyed() {
    choseIndexInterval
  },
  methods: {
    changeChannelIndex(index) {
      this.showChannel = index
    },
    changeCurrentIndex(index) {
      this.currnetServiceIndex = index
      this.playAutoAction()
    },
    playAutoAction() {
      let that = this
      clearInterval(choseIndexInterval)
      choseIndexInterval = setInterval(function() {
        let currnetServiceIndex = that.currnetServiceIndex + 1
        that.currnetServiceIndex = currnetServiceIndex%that.lkMarketing.service.serviceList.length
      }, 8000)
    },
    stopAction() {clearInterval(choseIndexInterval)},
    startAction() {this.playAutoAction()}
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>

