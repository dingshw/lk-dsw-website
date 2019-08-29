<template>
  <div>
    <Header activeMenu="同城推广" />
    <div class="main">
      <div class="main-header">
        <img
          src="https://storage.jd.com/jdlk-website/citymarketing/citybg.png"
          alt="同城推广"
          class="hardwarebg"
        />
        <div class="main-header-message">
          <h1 class="main-header-title">同城推广</h1>
          <div class="main-header-info">面向实体商铺的营销解决方案</div>
        </div>
      </div>

      <div class="service-desc-box">
        <div class="service-desc">
          <div class="title-bgtext">
            <img
              class="title-bgIcon"
              src="https://storage.jd.com/jdlk-website/citymarketing/service.png"
              alt="服务介绍"
            />
            <h4>服务介绍</h4>
          </div>
          <div class="underline"></div>
          <div class="menu">
            <template v-for="item in serviceList">
              <div class="item" :key="item.id" @click="changeId(item.id)">
                <span class="title" :class="activeServiceId == item.id ? 'active' : ''">{{item.title}}</span>
              </div>
            </template>
          </div>
        </div>

        <div class="serviceBox">
          <div class="contentBox" @mouseenter="enterFn" @mouseleave="leaveFn">
            <!-- <img class="bgmain" src="https://storage.jd.com/jdlk-website/citymarketing/servicebg.png" alt=""> -->
            <div class="content" v-if="activeServiceId == 0">
              <div class="title">专注周边3公里</div>
              <div class="desc">3公里是多数实体商铺的有效服务半径，聚合区域内全部传播渠道：电梯广告、收银台、公共WIFI…，有针对性的覆盖店铺周边工作/生活圈</div>
              <div class="iconBox">
                <div class="line">
                  <div class="item">
                    <img
                      src="https://storage.jd.com/jdlk-website/citymarketing/zhuanzhuzhoubian.png"
                      alt
                    />
                    <div class="name">专注于店铺周边三公里</div>
                  </div>
                  <div class="item">
                    <img
                      src="https://storage.jd.com/jdlk-website/citymarketing/wanzhengfangan.png"
                      alt
                    />
                    <div class="name">提供完整的营销解决方案</div>
                  </div>
                </div>
                <div class="line">
                  <div class="item">
                    <img
                      src="https://storage.jd.com/jdlk-website/citymarketing/renqunhuaxiang.png"
                      alt
                    />
                    <div class="name">提供客群分析、人群画像</div>
                  </div>
                  <div class="item">
                    <img src="https://storage.jd.com/jdlk-website/citymarketing/duoweiqudao.png" alt />
                    <div class="name">提供多维度广告传播渠道</div>
                  </div>
                </div>
              </div>

              <img
                class="mapbg"
                src="https://storage.jd.com/jdlk-website/citymarketing/3milesmap.png"
                alt
              />
              <img
                class="locationIcon"
                src="https://storage.jd.com/jdlk-website/citymarketing/location.png"
                alt
              />
              <img
                class="milesTag"
                src="https://storage.jd.com/jdlk-website/citymarketing/3miles.png"
                alt
              />
              <div class="cicirbox active">
                <div class="cicir1 center"></div>
                <div class="cicir2 center"></div>
                <div class="cicir3 center"></div>
              </div>
            </div>
            <div class="content" v-if="activeServiceId == 1">
              <div class="title">大数据驱动</div>
              <div
                class="desc"
              >基于京东多年电商、金融等业务的数据积累和挖掘，能够多维度、有深度的精准匹配线上、线下人群，独创的“楼宇画像”，为线下广告投放带来全新体验。</div>
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

              <BuidingMap from="1" />
            </div>
            <div class="content" v-if="activeServiceId == 2">
              <div class="title">线上线下一体式覆盖</div>
              <div class="desc">针对目标区域的小区、写字楼等场景，支持线上线下一体化覆盖，线下精确到每一栋楼宇，线上精确到单个用户。保证足够的覆盖密度。</div>

              <div class="pro">
                <div class="xianxia">
                  <div class="top">
                    <img
                      class="icon"
                      src="https://storage.jd.com/jdlk-website/citymarketing/louyufugai.png"
                      alt
                    />
                    <div class="txt">
                      <div class="title3">线下楼宇覆盖</div>
                      <div class="desc3">针对目标区域，覆盖核心生活场景，以电梯屏幕广告展示曝光为主，高密度曝光覆盖</div>
                    </div>
                  </div>

                  <div class="bottom">
                    <div class="item zhuzhai">
                      <img
                        class="icon"
                        src="https://storage.jd.com/jdlk-website/citymarketing/zhuzhaiicon.png"
                        alt
                      />
                      <div class="name">住宅</div>
                    </div>
                    <div class="item xiezilou">
                      <img
                        class="icon"
                        src="https://storage.jd.com/jdlk-website/citymarketing/xiezilouicon.png"
                        alt
                      />
                      <div class="name">写字楼</div>
                    </div>
                    <div class="item shangchang">
                      <img
                        class="icon"
                        src="https://storage.jd.com/jdlk-website/citymarketing/shangchangicon.png"
                        alt
                      />
                      <div class="name">商场</div>
                    </div>
                  </div>
                </div>

                <div class="xianshang">
                  <div class="top">
                    <img
                      class="icon"
                      src="https://storage.jd.com/jdlk-website/citymarketing/jingzhuntoufang.png"
                      alt
                    />
                    <div class="txt">
                      <div class="title3">线上精准追投</div>
                      <div class="desc3">将目标区域的用户ID通过来客DSP平台对接线上主流媒体，实现精准的人群定向投放</div>
                    </div>
                  </div>

                  <div class="bottom">
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

                <div class="move">
                  <div class="txt">基于目标区域收货地址逆推用户ID</div>
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
              </div>
            </div>

            <div class="content" v-if="activeServiceId == 3">
              <div class="title">社区闭环营销</div>
              <div
                class="desc"
              >通过来客旗下的社区拼购小程序“钱呱呱”，实现屏幕与手机的联动，为抽奖、秒杀、拼购等提供逻辑及交易支持。同时为您的品牌和商品在小区内沉淀口碑</div>

              <div class="bihuan">
                <div class="item">
                  <div class="top">
                    <img
                      class="num"
                      src="https://storage.jd.com/jdlk-website/citymarketing/01.png"
                      alt
                    />
                    <div class="name3">屏上扫描促销信息</div>
                  </div>
                  <div class="middle">
                    <img src="https://storage.jd.com/jdlk-website/citymarketing/bihuan1.png" alt />
                  </div>
                  <div class="bottom">屏上多种动态形式展现商品信息，包括但不限于：秒杀、促销、拼购、抽奖</div>
                </div>
                <div class="item">
                  <div class="top">
                    <img
                      class="num"
                      src="https://storage.jd.com/jdlk-website/citymarketing/02.png"
                      alt
                    />
                    <div class="name3">在小程序完成后续操作</div>
                  </div>
                  <div class="middle">
                    <img src="https://storage.jd.com/jdlk-website/citymarketing/bihuan2.png" alt />
                  </div>
                  <div class="bottom">无需自有网店，钱呱呱小程序统一承接商品落地页，完成支付、积分兑换等流程</div>
                </div>
                <div class="item">
                  <div class="top">
                    <img
                      class="num"
                      src="https://storage.jd.com/jdlk-website/citymarketing/03.png"
                      alt
                    />
                    <div class="name3">用户口碑沉淀</div>
                  </div>
                  <div class="middle">
                    <img src="https://storage.jd.com/jdlk-website/citymarketing/bihuan3.png" alt />
                  </div>
                  <div class="bottom">基于小区、写字楼，建立社区拼购、分享、晒单讨论氛围。沉淀用户口碑。</div>
                </div>

                <div class="move">
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

                <div class="move move2">
                  <!-- <img
                  class="sanjiao"
                  src="https://storage.jd.com/jdlk-website/citymarketing/sanjiao.png"
                  alt
                  />-->
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
              </div>
            </div>
            <div class="service-item-line">
              <div class="change-list-line"><div class="change-list-line-active" :style="{'left': activeServiceId*30+'px'}"></div></div>
              <div class="change-list-text">0{{activeServiceId+1}}/04</div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-desc">
        <img
          class="productbg"
          src="https://storage.jd.com/jdlk-website/citymarketing/productbg.png"
          alt
        />
        <div class="title-bgtext">
          <img
            class="title-bgIcon"
            src="https://storage.jd.com/jdlk-website/citymarketing/hardware.png"
            alt="产品介绍"
          />
          <h4>产品介绍</h4>
        </div>
        <div class="underline"></div>
        <div class="product-content">
          <img
            src="https://storage.jd.com/jdlk-website/hardware/douhao1.png"
            alt="ai"
            class="douhao1"
          />
          <div class="item-cardandimg">
            <div class="message-item card-left">
              <h4>有屏推推</h4>
              <h5>基于微信的小程序系统，使用轻便，提供CPW+CPM+CPT多种投放方式，改变市场上单一的周期为主的售卖方式，提供以“有效展示”定价的方式售卖、降低投放门槛，满足碎片化投放需求，同时给出实时的数据报告，随时随地投放和管理您的线下广告。</h5>
              <div class="card-item">
                <div class="card-info" v-for="(item, index) in youpingtuituiList" :key="index">
                  <img :src="item.icon" :alt="item.title" />
                  <div>
                    <div class="card-title">{{item.title}}</div>
                    <div class="card-message">{{item.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="img-right">
              <img
                class="main"
                src="https://storage.jd.com/jdlk-website/citymarketing/youpingtuitui.png"
                alt="有屏推推"
              />
              <img
                class="qr"
                src="https://storage.jd.com/jdlk-website/citymarketing/youpingtuituiqr.png"
                alt="有屏推推"
              />
            </div>
          </div>
          <div class="item-imgandcard">
            <div class="img-left">
              <img
                class="main"
                src="https://storage.jd.com/jdlk-website/citymarketing/fangyuantuitui.png"
                alt="方圆推推"
              />
              <img
                class="qr"
                src="https://storage.jd.com/jdlk-website/citymarketing/fangyuantuituiqr.png"
                alt="方圆推推"
              />
            </div>
            <div class="message-item card-right">
              <h4>方圆推推</h4>
              <h5>线下小商户福利平台，我们将社区电梯广告屏一部分资源免费给小B商户使用，小商户注册后添加店铺即可免费发布优惠活动，所发布活动在周边3公里社区屏幕展示，社区用户扫码即可领取优惠券到店使用</h5>
              <div class="card-item">
                <div class="card-info" v-for="(item, index) in fangyuantuituiList" :key="index">
                  <img :src="item.icon" :alt="item.title" />
                  <div>
                    <div class="card-title">{{item.title}}</div>
                    <div class="card-message">{{item.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-cardandimg" style="margin-top: 155px">
            <div class="message-item card-left">
              <h4>钱呱呱</h4>
              <h5>微信小程序用户福利平台，我们将一部分广告收入用来激励用户观看广告，进一步增强广告效果，也持续的沉淀广告主同受众用户的关系，为广告主创造更多的附加价值。</h5>
              <div class="card-item">
                <div class="card-info" v-for="(item, index) in qianguaguaList" :key="index">
                  <img :src="item.icon" :alt="item.title" />
                  <div>
                    <div class="card-title">{{item.title}}</div>
                    <div class="card-message">{{item.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="img-right">
              <img
                class="main"
                src="https://storage.jd.com/jdlk-website/citymarketing/qianguagua.png"
                alt="钱呱呱"
              />
              <img
                class="qr"
                src="https://storage.jd.com/jdlk-website/citymarketing/qianguaguaqr.png"
                alt="钱呱呱"
              />
            </div>
          </div>
          <img
            src="https://storage.jd.com/jdlk-website/hardware/douhao2.png"
            alt="ai"
            class="douhao2"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import main from "./main.js";
export default main;
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
