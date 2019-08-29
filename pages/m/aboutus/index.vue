<template>
  <div>
    <Header activeMenu="关于我们" />
    <div class="main">
      <div class="main-header-m">
        <img
          src="https://storage.jd.com/jdlk-website/aboutus/m2/mainbg.png"
          alt="关于我们"
          class="hardwarebg"
        />
        <div class="main-header-message">
          <h1 class="main-header-title">关于我们</h1>
          <div class="main-header-info">about us</div>
        </div>
      </div>
    </div>

    <div class="jdjrdesc">
      <div class="title-bgtext-m">
        <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/aboutus/m2/jddglobal.png" alt="京东数科"/>
        <h4>京东数科简介</h4>
      </div>
      <div class="underline-m"></div>

      <p>京东数字科技的前身是京东金融。2018年11月，京东金融品牌升级为京东数字科技，旗下包括京东金融、京东城市、京东农牧、京东钼媒、京东少东家五大子品牌。</p>
      <p>京东数字科技的经营宗旨是用数字科技连接金融和实体产业，助力产业提升互联网化、数字化、智能化水平，推动实体经济的发展，创造社会价值。</p>
      <p>京东数字科技以数据技术、AI、IoT三大时代前沿技术为核心，已经完成在数字金融、数字城市、数字 农业、数字营销、数字校园等领域的全面布局，在客户群体上实现了个人端，企业端，政府端的三端合一。未来，京东数字科技将在深耕现有业务领域的同时，进入更多实体产业领域。</p>

      <div class="flower">
        <img src="https://storage.jd.com/jdlk-website/aboutus/m2/flower.png" alt />
        <div class="fu fu1">金融</div>
        <div class="fu fu2">营销</div>
        <div class="fu fu3">农业</div>
        <div class="fu fu4">校园</div>
        <div class="fu fu5">城市</div>
        <div class="zhu">数字能力</div>
      </div>
    </div>

    <div class="laikedesc">
      <div class="title-bgtext-m">
        <img class="title-bgIcon-m" src="https://storage.jd.com/jdlk-website/aboutus/m2/jdlaike.png" alt="京东来客"/>
        <h4>京东来客</h4>
      </div>
      <div class="underline-m"></div>

      <div class="desc">京东来客，是京东数科旗下，一款以大数据与AI驱动的线上线下一体化媒体营销平台。</div>
      <div class="txtBox">
        <div class="title">线上、线下一体化</div>
        <p>线上：多元化媒体组合，京X计划等优质流量</p>
        <p>线下：商场、写字楼、小区等多场景覆盖的自有广告屏资源</p>
      </div>
      <div class="txtBox">
        <div class="title">AI+大数据驱动</div>
        <p>在京东海量数据基础上，AI赋能让广告更加精准、个性化</p>
        <p>领先的电商、金融大数据运用能力，让线上、线下广告投放运用自如</p>
      </div>
      <div class="txtBox">
        <div class="title">自建线下媒体为核心</div>
        <p>基于大数据推荐的点位部署方法，最大限度覆盖受众的生活链条</p>
        <p>具备AI能力的高性能设备，让AI与大数据在线下营销场景得到充分施展</p>
        <p>不断创新形式与玩法，吸引受众眼球，实时数据回传追踪投放的效果与反馈</p>
      </div>
      <div class="huan">
        <img class="bg" src="https://storage.jd.com/jdlk-website/aboutus/m2/laikebg.png" alt />
        <div class="starName starName-1">线上、线下一体化</div>
        <div class="starName starName-2">AI+大数据驱动</div>
        <div class="starName starName-3">自建线下媒体</div>
      </div>
      <img class="laikedescbg" src="https://storage.jd.com/jdlk-website/aboutus/m2/jdjrbg.png"/>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/m-header/head";
import Footer from '@/components/m-footer/footer'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "关于我们"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
