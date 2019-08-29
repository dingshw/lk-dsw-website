<template>
  <div>
    <Header activeMenu="业务合作" />
    <div class="main">
      <div class="main-header-m">
        <img
          src="https://storage.jd.com/jdlk-website/businessm2/businessbg.png"
          alt="城市合伙人计划"
          class="hardwarebg"
        />
        <div class="main-header-message" style="width: 100vw">
          <h1 class="main-header-title">城市合伙人计划</h1>
          <div class="main-header-info">京东大数据赋能合作伙伴，共建生态链</div>
        </div>
      </div>

      <div class="froms">
        <div class="title-bgtext-m white">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/businessm2/froms.png" alt="合作形式"/>
          <h4>合作形式</h4>
        </div>
        <div class="underline-m"></div>

        <div class="descMain">京东来客正面向全国重点城市寻找合作伙伴，优先合作有物业资源的户外媒体运营商。区域商向总部缴纳一定金额的加盟费，总部提供品牌、技术、培训、大数据、广告监测等支持或服务。</div>
        <div class="map">
          <div class="beijing">
            <div class="txt">北京</div>
            <img src="https://storage.jd.com/jdlk-website/businessm2/redLocation.png" alt="">
            <div class="lightPointBox">
              <div class="point1 center"></div>
            </div>
          </div>
          <div class="txtBox">
            <div class="top">
              <p>面向全国</p>
              <p>全面开放加盟中...</p>
            </div>
            <div class="num">
              <div class="big">293</div>
              <div class="small">个地级市</div>
            </div>
            <div class="num">
              <div class="big">366</div>
                <div class="small">个县级市</div>
            </div>
          </div>
        </div>

      </div>

      <div class="support">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/businessm2/support.png" alt="京东数科"/>
          <h4>合作支持</h4>
        </div>
        <div class="underline-m"></div>

        <div class="menu" ref="menuSupport">
          <div class="itemBox">
            <div class="item" :class="supportIndex == i.id ? 'active' : ''" 
              v-for="i in supportList" :key="i.id"
              @click="supportIndex = i.id"
            >{{i.name}}</div>
          </div>
          <div class="line"></div>
        </div>

        <div class="content" v-if="supportIndex == 0">
          <div class="title">大数据驱动</div>
          <div class="desc">全自主研发的广告硬件设备，整合了边缘计算、人体感应识别等多项技术。配套线上化的媒体管理平台，实现点位全链路监测。</div>
          <div class="imgBox">
            <img class="mainImg" src="https://storage.jd.com/jdlk-website/businessm2/computer.png" 
              alt="大数据驱动" >
            <div class="tag tag1">来客广告屏</div>
            <div class="tag tag2">媒体管理平台</div>
          </div>
          <div class="iconBox">
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/yingjianjishu.png" alt="">
              <div class="name">硬件技术</div>
            </div>
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/shujufankui.png" alt="">
              <div class="name">实时数据反馈</div>
            </div>
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/renjihudong.png" alt="">
              <div class="name">人机互动</div>
            </div>
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/lbs.png" alt="">
              <div class="name">LBS精准定位</div>
            </div>
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/shishijiance.png" alt="">
              <div class="name">实时检测设备状态</div>
            </div>
            <div class="item">
              <img src="https://storage.jd.com/jdlk-website/businessm2/jishijianbo.png" alt="">
              <div class="name">即时监播广告情况</div>
            </div>
          </div>
        </div>

        <div class="content" v-if="supportIndex == 1">
          <div class="title">软件及AI能力支持</div>
          <div class="desc">完善的线上广告投放系统，实现广告的即时上下刊，支持PC、手机多端操作。基于京东海量线下消费数据，结合AI及大数据分析能力，精准定位线下目标人群。</div>
          <img class="miles" src="https://storage.jd.com/jdlk-website/businessm2/aibg.png" alt="">
          <div class="iconBox">
            <div class="item wide">
              <img src="https://storage.jd.com/jdlk-website/businessm2/kequnfenxi.png" alt="">
              <div class="name">客群分析</div>
              <div class="subtitle">基于客户信息，以小区为单位，生成品牌/产品偏好分布</div>
            </div>
            <div class="item wide">
              <img src="https://storage.jd.com/jdlk-website/businessm2/celuedingzhi.png" alt="">
              <div class="name">策略定制</div>
              <div class="subtitle">敏锐发现顾客需求波动，并结合商铺经营类型，提供精准的营销建议</div>
            </div>
            <div class="item wide">
              <img src="https://storage.jd.com/jdlk-website/businessm2/xuqiuyuce.png" alt="">
              <div class="name">需求预测</div>
              <div class="subtitle">提取消费共性生成人群画像</div>
            </div>
          </div>
        </div>

        <div class="content" v-if="supportIndex == 2">
          <div class="title">京东广告生态</div>
          <div class="desc">融入京东广告生态，以京东来客的名义向自己的客户提供服务在拓展自有客户的同时，承接来自京东体系内客户的广告投放。</div>
          
          <div class="huan">
            <div class="box top">
              <div class="item item1">
                <img src="https://storage.jd.com/jdlk-website/businessm2/laike.png" alt="">
                <div class="name">京东来客</div>
              </div>
              <div class="item item2">
                <img src="https://storage.jd.com/jdlk-website/businessm2/louyutong.png" alt="">
                <div class="name wide">京东来客楼宇通</div>
              </div>
              <div class="item item3">
                <img src="https://storage.jd.com/jdlk-website/businessm2/youpingtuituiicon.png" alt="">
                <div class="name">有屏推推</div>
              </div>
              <div class="item item4">
                <img src="https://storage.jd.com/jdlk-website/businessm2/fangyuantuitui.png" alt="">
                <div class="name">方圆推推</div>
              </div>
            </div>
            <div class="title3 top">京东品牌背书</div>
            <div class="subtitle3 top">开放平台能力，授权平台使用</div>

            <div class="middle">
              <img src="https://storage.jd.com/jdlk-website/businessm2/JD.png" alt="">
              <div class="title4">广告生态中心</div>
              <div class="subtitle4">京东体系内广告主以及来客所拓展品牌广告</div>
            </div>

            <div class="title3 down">京东体系广告</div>
            <div class="subtitle3 down">承接京东体系广告</div>

            <div class="box down">
              <div class="item item5">
                <img src="https://storage.jd.com/jdlk-website/businessm2/shangcheng.png" alt="">
                <div class="name">京东商城</div>
              </div>
              <div class="item item6">
                <img src="https://storage.jd.com/jdlk-website/businessm2/jdjr.png" alt="">
                <div class="name">京东数科</div>
              </div>
              <div class="item item7">
                <img src="https://storage.jd.com/jdlk-website/businessm2/lingshou.png" alt="">
                <div class="name wide wide2">京东</div>
                <div class="name wide">无界零售</div>
              </div>
              <div class="item item8">
                <img src="https://storage.jd.com/jdlk-website/businessm2/huoban.png" alt="">
                <div class="name">京东伙伴</div>
              </div>
            </div>
          </div>
        </div>

        <div class="content" v-if="supportIndex == 3">
          <div class="title">完善的同城业务系统</div>
          <div class="desc">为城市合作伙伴提供完善的个人代理管理系统。更轻松的建立自己的城市销售体系。销售人员系统化管理，个人信息、业绩、客户关系在线查看。</div>
          
          <div class="di">
            <p>周边</p>
            <p>小区、写字楼</p>
          </div>
          <div class="phone">
            <div class="phoneItem">
              <div class="name name1">有屏推推</div>
              <img src="https://storage.jd.com/jdlk-website/businessm2/youpingtuituiphone.png" alt="">
            </div>
            <div class="phoneItem">
              <div class="name name2">钱呱呱</div>
              <img src="https://storage.jd.com/jdlk-website/businessm2/qianguagua.png" alt="">
            </div>
          </div>
          <div class="dipan">
            <div class="item item1">
              <img src="https://storage.jd.com/jdlk-website/businessm2/guanggaozhu.png" alt="">
              <div class="name">周边广告主</div>
            </div>
            <div class="item item2">
              <img src="https://storage.jd.com/jdlk-website/businessm2/guanggaoping.png" alt="">
              <div class="name">周边广告屏</div>
            </div>
            <div class="item item3">
              <img src="https://storage.jd.com/jdlk-website/businessm2/shouzhong.png" alt="">
              <div class="name">周边广告受众</div>
            </div>
            <div class="item item4">
              <img src="https://storage.jd.com/jdlk-website/businessm2/zhoubianshengtai.png" alt="">
              <div class="name">周边广告生态</div>
            </div>
          </div>
        </div>

        <div class="array leftArray" @click="leftPage">
          <img src="https://storage.jd.com/jdlk-website/businessm/leftArray2.png" alt="">
        </div>
        <div class="array rightArray" @click="rightPage">
          <img src="https://storage.jd.com/jdlk-website/businessm/rightArray2.png" alt="">
        </div>
      </div>

      <div class="comeon">
        <div class="title-bgtext-m">
          <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/businessm2/contactus.png" alt="成为合伙人"/>
          <h4>成为合伙人</h4>
        </div>
        <div class="underline-m"></div>

        <div class="kuangBox">
          <div class="kuang">
            <div class="middle">
              <img class="icon icona" src="https://storage.jd.com/jdlk-website/businessm2/phone.png" alt="">
              <a class="txt" href="tel://13661382000">136 6138 2000</a>
            </div>
          </div>
          <div class="kuang">
            <div class="middle b">
              <img class="icon iconb" src="https://storage.jd.com/jdlk-website/businessm2/email.png" alt="">
              <div class="txt b">mahongliang12@jd.com</div>
            </div>
          </div>
        </div>

        <div class="addr">
          <p>邮编：100176</p>
          <p>地址：北京市大兴区亦庄经济技术开发区经海五路58号院经开数字工场10号京东金融</p>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import main from './main.js'
export default main
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>