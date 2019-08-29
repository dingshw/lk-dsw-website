<template>
  <div>
    <Header activeMenu="业务合作" />
    <div class="main">
      <div class="main-header">
        <img
          src="https://storage.jd.com/jdlk-website/aboutus/aboutusbg.png"
          alt="关于我们"
          class="hardwarebg"
        />
        <div class="main-header-message">
          <h1 class="main-header-title">城市合伙人计划</h1>
          <div class="main-header-info">京东大数据赋能合作伙伴，共建生态链</div>
        </div>
      </div>
      <div class="citymap-workcoop">
        <div class="title-bgtext">
          <img class="title-bgIcon" src="https://storage.jd.com/jdlk-website/business/froms.png" alt="合作形式"/>
          <h4 class="title-text">合作形式</h4>
          </div>
        <div class="underline"></div>
        <h5>京东来客正面向全国重点城市寻找合作伙伴，优先合作有物业资源的户外媒体运营商。区域商向总部缴纳一定金额的加盟费，总部提供品牌、技术、培训、大数据、广告监测等支持或服务。</h5>
        <div class="citymap-china">
          <div class="citymap-num">
            <h6 class="num-title">面向全国，全面开放加盟</h6>
            <div class="num-list">
              <div>
                <div class="num-strong">
                  <NumberGrow :value="293"></NumberGrow>
                </div>
                <span>个地级市</span>
              </div>
              <div class="num-line"></div>
              <div>
                <div class="num-strong">
                  <NumberGrow :value="366"></NumberGrow>
                </div>
                <span>个县级市</span>
              </div>
            </div>
          </div>
          <div class="bjlocation">
            <h6>北京</h6>
            <img src="https://storage.jd.com/jdlk-website/business/bjlocation.png" alt="北京"/>
            <div class="lightPointBox">
              <div class="point1 center"></div>
              <div class="point2 center"></div>
              <div class="point3 center"></div>
            </div>
          </div>
          <img class="bj-xian" src="https://storage.jd.com/jdlk-website/business/bj-xian.png" alt="北京-西安"/>
          <div class="xianlocation citymap-location">
            <h6>西安</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="西安"/>
          </div>
          <img class="bj-gz" src="https://storage.jd.com/jdlk-website/business/bj-gz.png" alt="北京-广州"/>
          <div class="gzlocation citymap-location">
            <h6>广州</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="广州"/>
          </div>
          <img class="bj-jn" src="https://storage.jd.com/jdlk-website/business/bj-jn.png" alt="北京-济南"/>
          <div class="jnlocation citymap-location">
            <h6>济南</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="济南"/>
          </div>
          <img class="bj-qd" src="https://storage.jd.com/jdlk-website/business/bj-qd.png" alt="北京-青岛"/>
          <div class="qdlocation citymap-location">
            <h6>青岛</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="青岛"/>
          </div>
          <img class="bj-hz" src="https://storage.jd.com/jdlk-website/business/bj-hz.png" alt="北京-杭州"/>
          <div class="hzlocation citymap-location">
            <h6>杭州</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="杭州"/>
          </div>
          <img class="bj-sh" src="https://storage.jd.com/jdlk-website/business/bj-sh.png" alt="北京-上海"/>
          <div class="shlocation citymap-location">
            <h6>上海</h6>
            <img src="https://storage.jd.com/jdlk-website/business/lansetubiao.png" alt="上海"/>
          </div>
        </div>
      </div>
      <div class="support">
        <div class="line"></div>
        <div class="supportContent">
          <div class="title-bgtext">
            <img
              class="title-bgIcon"
              src="https://storage.jd.com/jdlk-website/business/support.png"
              alt="合作形式"
            />
            <h4>合作支持</h4>
          </div>
          <div class="underline"></div>

          <div class="menu">
            <template v-for="item in serviceList">
              <div class="item" :key="item.id" @click="changeId(item.id)">
                <span class="title" :class="activeServiceId == item.id ? 'active' : ''">{{item.title}}</span>
              </div>
            </template>
          </div>
          <div class="contentBox" @mouseenter="enterFn" @mouseleave="leaveFn">
            <div class="content" v-if="activeServiceId == 0">
              <div class="left1">
                <img class="num" src="https://storage.jd.com/jdlk-website/business/1.png" alt />
                <div class="title">智能化广告硬件</div>
                <div class="desc">
                  <p>全自主研发的广告硬件设备，整合了边缘计算、人体感应识别等多项技术</p>
                  <p>配套线上化的媒体管理平台，实现点位全链路监测。</p>
                </div>
                <div class="iconBox">
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/yingjian.png" alt />
                    <div class="name">硬件技术</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/shujufankui.png" alt />
                    <div class="name">实时数据反馈</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/renjihudong.png" alt />
                    <div class="name">人机互动</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/lbs.png" alt />
                    <div class="name">LBS精准定位</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/shishijiance.png" alt />
                    <div class="name">实时检测设备状态</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/business/jishijianbo.png" alt />
                    <div class="name">即时监播广告情况</div>
                  </div>
                </div>
              </div>
              <div class="right1">
                <img
                  src="https://storage.jd.com/jdlk-website/business/zhinengguanggbg.png"
                  alt
                  class="bg"
                />
                <img src="https://storage.jd.com/jdlk-website/business/landian.png" alt class="point" />
                <img
                  src="https://storage.jd.com/jdlk-website/business/zhinengguanggyingjian.png"
                  alt
                  class="main"
                />
              </div>
            </div>
            <div class="content" v-if="activeServiceId == 1">
              <div class="left1">
                <img class="num" src="https://storage.jd.com/jdlk-website/business/2.png" alt />
                <div class="title">软件及AI能力支持</div>
                <div class="desc">
                  <p>完善的线上广告投放系统，实现广告的即时上下刊，支持PC、手机多端操作。</p>
                  <p>基于京东海量线下消费数据，结合AI及大数据分析能力，精准定位线下目标人群。</p>
                </div>
                <div class="iconBox2">
                  <div class="item">
                    <div class="left">
                      <img src="https://storage.jd.com/jdlk-website/citymarketing/kequnfenxi.png" alt />
                    </div>
                    <div class="right">
                      <div class="title2">客群分析</div>
                      <div class="desc2">基于客户信息，以小区为单位，生成品牌/产品偏好分布</div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="left">
                      <img src="https://storage.jd.com/jdlk-website/citymarketing/xuqiuyuce.png" alt />
                    </div>
                    <div class="right">
                      <div class="title2">需求预测</div>
                      <div class="desc2">提取消费共性生成人群画像</div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="left">
                      <img
                        src="https://storage.jd.com/jdlk-website/citymarketing/celuedingzhi.png"
                        alt
                      />
                    </div>
                    <div class="right">
                      <div class="title2">策略定制</div>
                      <div class="desc2">敏锐发现顾客需求波动，并结合商铺经营类型，提供精准的营销建议</div>
                    </div>
                  </div>
                </div>
              </div>
              <BuidingMap from='2'/>
            </div>
            <div class="content" v-if="activeServiceId == 2">
              <div class="left1">
                <img class="num" src="https://storage.jd.com/jdlk-website/business/3.png" alt />
                <div class="title">京东广告生态</div>
                <div class="desc">
                  <p>融入京东广告生态，以京东来客的名义向自己的客户提供服务</p>
                  <p>在拓展自有客户的同时，承接来自京东体系内客户的广告投放</p>
                </div>
              </div>
              <div class="huan">
                <img class="bg" src="https://storage.jd.com/jdlk-website/business/shengtaiguanggaobg.png" alt="">
                <div class="bluebox">
                  <div class="item item1">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/jdlk.png" alt="">
                    <div class="name">京东来客</div>
                  </div>
                  <div class="item item2">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/louyutongicon.png" alt="">
                    <div class="name name1">京东来客 楼宇通</div>
                  </div>
                  <div class="item item3">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/youpingtuituiicon.png" alt="">
                    <div class="name">有屏推推</div>
                  </div>
                  <div class="item item4">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/fangyuantuituiicon.png" alt="">
                    <div class="name">方圆推推</div>
                  </div>
                  <div class="txtBox">
                    <div class="title">京东品牌背书</div>
                    <div class="subtitle">开放平台能力，授权平台使用</div>
                  </div>
                </div>
                <div class="redbox">
                  <div class="item item1">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/jdicon.png" alt="">
                    <div class="name">京东商城</div>
                  </div>
                  <div class="item item2">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/jdjricon.png" alt="">
                    <div class="name">京东数科</div>
                  </div>
                  <div class="item item3">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/wujielingshouicon.png" alt="">
                    <div class="name name1">京东</div>
                    <div class="name name1">无界零售</div>
                  </div>
                  <div class="item item4">
                    <img class="icon" src="https://storage.jd.com/jdlk-website/business/jingdonghuoban.png" alt="">
                    <div class="name">京东伙伴</div>
                  </div>
                  <div class="txtBox">
                    <div class="title">京东体系广告</div>
                    <div class="subtitle">承接京东体系广告</div>
                  </div>
                </div>
                <div class="middlebox">
                  <img class="jdicon" src="https://storage.jd.com/jdlk-website/business/JD.png" alt="">
                  <div class="title">京东广告生态</div>
                  <div class="desc">京东体系内广告主以及来客所拓展品牌广告</div>
                </div>
              </div>
            </div>
            <div class="content" v-if="activeServiceId == 3">
              <div class="left1">
                <img class="num" src="https://storage.jd.com/jdlk-website/business/4.png" alt />
                <div class="title">完善的同城业务系统</div>
                <div class="desc">
                  <p>为城市合作伙伴提供完善的个人代理管理系统。更轻松的建立自己的城市销售体系。</p>
                  <p>销售人员系统化管理，个人信息、业绩、客户关系在线查看</p>
                </div>
              </div>
              <div class="tongcheng">
                <div class="phoneBox phone-left">
                  <div class="name name1">有屏推推</div>
                  <img src="https://storage.jd.com/jdlk-website/business/youpingtuituishouji.png" alt="">
                </div>
                <div class="phoneBox phone-right">
                  <div class="name name2">钱呱呱</div>
                  <img src="https://storage.jd.com/jdlk-website/business/qianguaguashouji.png" alt="">
                </div>
                <div class="middleBox">
                  <div class="bigBox">
                    <img src="https://storage.jd.com/jdlk-website/business/louyuicon.png" alt />
                    <div class="txt">
                      <p>周边</p>
                      <p>小区、写字楼</p>
                    </div>
                  </div>
                  <img class="bg" src="https://storage.jd.com/jdlk-website/business/guanggaoshengtaibg.png" alt="">
                  <div class="smallBox smallBox1">
                    <img src="https://storage.jd.com/jdlk-website/business/guanggaozhu.png" alt="">
                    <div class="txt">周边广告主</div>
                  </div>
                  <div class="smallBox smallBox2">
                    <img src="https://storage.jd.com/jdlk-website/business/guanggaoshengtai.png" alt="">
                    <div class="txt">周边广告生态</div>
                  </div>
                  <div class="smallBox smallBox3">
                    <img src="https://storage.jd.com/jdlk-website/business/guanggaoshouzhong.png" alt="">
                    <div class="txt">周边广告受众</div>
                  </div>
                  <div class="smallBox smallBox4">
                    <img src="https://storage.jd.com/jdlk-website/business/guanggaoping.png" alt="">
                    <div class="txt">周边广告屏</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="change-item-line">
              <div class="change-list-line"><div class="change-list-line-active" :style="{'left': activeServiceId*30+'px'}"></div></div>
              <div class="change-list-text">0{{activeServiceId+1}}/04</div>
            </div>
          </div>
        </div>
      </div>

      <div class="comeon">
        <div class="comeonContent">
          <!-- <img class="bg" src="https://storage.jd.com/jdlk-website/business/hehuorenbg.png" alt=""> -->
          <div class="title-bgtext">
            <img
              class="title-bgIcon"
              src="https://storage.jd.com/jdlk-website/business/contactus.png"
              alt="成为合伙人"
            />
            <h4>成为合伙人</h4>
          </div>
          <div class="underline"></div>

          <div class="box">
            <div class="bigTxt">联系方式</div>
            <div class="detail">
              <p>邮编：100176</p>
              <p>地址：北京市大兴区亦庄经济技术开发区经海五路58号院经开数字工场10号京东金融</p>
            </div>
            <div class="kuangBox">
              <div class="kuang">
                <div class="middle">
                  <img class="icon" src="https://storage.jd.com/jdlk-website/business/tel.png" alt="">
                  <div class="txt">13661382000</div>
                </div>
              </div>
              <div class="kuang right">
                <div class="middle b">
                  <img class="icon" src="https://storage.jd.com/jdlk-website/business/email.png" alt="">
                  <div class="txt b">mahongliang12@jd.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import main from "./main";
export default main;
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
