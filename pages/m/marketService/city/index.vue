<template>
  <div>
    <Header activeMenu="同城推广" />
    <div class="main">
      <div class="main-header-m">
        <img
          src="https://storage.jd.com/jdlk-website/citymarketing/m2/mainbg.png"
          alt="同城推广"
          class="hardwarebg"
        />
        <div class="main-header-message">
          <h1 class="main-header-title">同城推广</h1>
          <div class="main-header-info">面向实体商铺的营销解决方案</div>
        </div>
      </div>
    </div>

    <div class="service">
      <div class="title-bgtext-m white">
        <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/citymarketing/m2/service.png" alt="服务介绍"/>
        <h4>服务介绍</h4>
      </div>
      <div class="underline-m"></div>

      <div class="menu" ref="menuService">
        <div class="itemBox">
          <div class="item" :class="serviceIndex == i.id ? 'active' : ''" 
            v-for="i in serviceList" :key="i.id"
            @click="serviceIndex = i.id"
          >{{i.name}}</div>
        </div>
        <div class="line"></div>
      </div>

      <div class="content" v-if="serviceIndex == 0">
        <div class="title">专注周边3公里</div>
        <div class="desc">3公里是多数实体商铺的有效服务半径，聚合区域内全部传播渠道：电梯广告、收银台、公共WIFI…，有针对性的覆盖店铺周边工作/生活圈</div>
        <img class="miles" src="https://storage.jd.com/jdlk-website/citymarketing/m2/3mailesbg.png" alt="">
        <div class="iconBox">
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/zhuanzhuzhoubian.png" alt="">
            <div class="name">专注于店铺周边三公里</div>
          </div>
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/wanzhengfangan.png" alt="">
            <div class="name">提供完整的营销解决方案</div>
          </div>
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/renqunhuaxiang.png" alt="">
            <div class="name">提供客群分析、人群画像</div>
          </div>
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/duoweiqudao.png" alt="">
            <div class="name">提供多维度广告传播 渠道</div>
          </div>
        </div>
      </div>
      <div class="content" v-if="serviceIndex == 1">
        <div class="title">大数据驱动</div>
        <div class="desc">基于京东多年电商、金融等业务的数据积累和挖掘，能够多维度、有深度的精准匹配线上、线下人群，独创的“楼宇画像”，为线下广告投放带来全新体验。</div>
        <img class="miles" src="https://storage.jd.com/jdlk-website/citymarketing/m2/bigdata.png" alt="">
        <div class="iconBox" style="margin-top: -120px;">
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/i-kequnfenxi.png" alt="">
            <div class="name">客群分析</div>
            <div class="subtitle">基于客户信息，以小区为单位，生成品牌/产品偏好分布</div>
          </div>
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/celuedingzhi.png" alt="">
            <div class="name">策略定制</div>
            <div class="subtitle">敏锐发现顾客需求波动，并结合商铺经营类型，提供精准的营销建议</div>
          </div>
          <div class="item">
            <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/i-xuqiuyuce.png" alt="">
            <div class="name">需求预测</div>
            <div class="subtitle">提取消费共性生成人群画像</div>
          </div>
        </div>
      </div>
      <div class="content" v-if="serviceIndex == 2">
        <div class="title">线上线下一体式覆盖</div>
        <div class="desc">针对目标区域的小区、写字楼等场景，支持线上线下一体化覆盖，线下精确到每一栋楼宇，线上精确到单个用户。保证足够的覆盖密度。</div>
        <div class="o2o">
          <div class="xianxia">
            <div class="top">
              <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/louyuicon.png" alt="">
              <div class="right">
                <div class="title2">线下楼宇覆盖</div>
                <div class="desc2">针对目标区域，覆盖核心生活场景，以电梯屏幕广告展示曝光为主，高密度曝光覆盖</div>
              </div>
            </div>
            <div class="bottom">
              <div class="item item1">
                <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/zhuzhaiicon.png" alt="">
                <div class="name2">住宅</div>
              </div>
              <div class="item item2">
                <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/xiezilouicon.png" alt="">
                <div class="name2">写字楼</div>
              </div>
              <div class="item item3">
                <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/shangchangicon.png" alt="">
                <div class="name2">商场</div>
              </div>
            </div>
          </div>
          <div class="move">
            <!-- <div class="txt">基于目标区域收货地址逆推用户ID</div> -->
            <img
              class="sanjiao"
              src="https://storage.jd.com/jdlk-website/citymarketing/sanjiao.png"
              alt
            />
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
          <div class="xianshang">
            <div class="top">
              <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/xianshangicon.png" alt="">
              <div class="right">
                <div class="title2">线上精准追投</div>
                <div class="desc2">将目标区域的用户ID通过来客DSP平台对接线上主流媒体，实现精准的人群定向投放</div>
              </div>
            </div>
            <div class="bottom2">
              <template v-for="i in jutouList">
                <div class="item" :key="i.name">
                  <img
                    :src="'https://storage.jd.com/jdlk-website/citymarketing/' + i.icon + '.png'"
                    alt
                  />
                  <div class="name2">{{i.name}}</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="content" v-if="serviceIndex == 3">
        <div class="title">社区闭环营销</div>
        <div class="desc">通过来客旗下的社区拼购小程序“钱呱呱”，实现屏幕与手机的联动，为抽奖、秒杀、拼购等提供逻辑及交易支持。同时为您的品牌和商品在小区内沉淀口碑。</div>
        <div class="bihuan">
          <div class="item">
            <div class="left">
              <div class="top">
                <img class="num" src="https://storage.jd.com/jdlk-website/citymarketing/01.png" alt="">
                <div class="name">屏上扫描促销信息</div>
              </div>
              <div class="desc3">
                屏上多种动态形式展现商品信息，包括但不限于：秒杀、促销、拼购、抽奖
              </div>
            </div>
            <img class="right" src="https://storage.jd.com/jdlk-website/citymarketing/bihuan1.png" alt="">
          </div>
          <div class="item">
            <div class="left">
              <div class="top">
                <img class="num" src="https://storage.jd.com/jdlk-website/citymarketing/02.png" alt="">
                <div class="name">在小程序完成后续操作</div>
              </div>
              <div class="desc3">
                无需自有网店，钱呱呱小程序统一承接商品落地页，完成支付、积分兑换等流程
              </div>
            </div>
            <img class="right" src="https://storage.jd.com/jdlk-website/citymarketing/bihuan2.png" alt="">
          </div>
          <div class="item">
            <div class="left">
              <div class="top">
                <img class="num" src="https://storage.jd.com/jdlk-website/citymarketing/03.png" alt="">
                <div class="name">用户口碑沉淀</div>
              </div>
              <div class="desc3">
                基于小区、写字楼，建立社区拼购、分享、晒单讨论氛围。沉淀用户口碑。
              </div>
            </div>
            <img class="right" src="https://storage.jd.com/jdlk-website/citymarketing/bihuan3.png" alt="">
          </div>
        </div>
      </div>

      <div class="array leftArray" @click="leftPage">
        <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/leftArray.png" alt="">
      </div>
      <div class="array rightArray" @click="rightPage">
        <img src="https://storage.jd.com/jdlk-website/citymarketing/m2/rightArray.png" alt="">
      </div>
    </div>

    <div class="product">
      <div class="title-bgtext-m">
        <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/citymarketing/m2/hardware.png" alt="产品介绍"/>
        <h4>产品介绍</h4>
      </div>
      <div class="underline-m"></div>

      <div class="menu">
        <div class="itemBox">
          <div class="item" :class="productIndex == i.id ? 'active' : ''" 
            v-for="i in productMenu" :key="i.id"
            @click="productIndex = i.id"
          >
            <p>{{i.name}}</p>
            <p>{{i.title}}</p>
          </div>
        </div>
        <div class="line"></div>
      </div>

      <div class="content" v-for="i in productList" :key="i.title" >
        <div class="title">{{i.title}}</div>
        <div class="desc">{{i.desc}}</div>
        <div class="imgBox">
          <img class="main" :src="i.mainimg" alt="" />
          <img class="qr" :src="i.qr" alt="" />
        </div>
        <div class="iconBox">
          <div class="item" v-for="j in i.iconList" :key="j.name">
            <img :src="j.img" alt="" />
            <div class="name">{{j.name}}</div>
            <div class="subtitle">{{j.subtitle}}</div>
          </div>
        </div>
      </div>

      <div class="array leftArray" @click="leftPage2">
        <img src="https://storage.jd.com/jdlk-website/businessm/leftArray2.png" alt="">
      </div>
      <div class="array rightArray" @click="rightPage2">
        <img src="https://storage.jd.com/jdlk-website/businessm/rightArray2.png" alt="">
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import main from './main'
export default main
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
