<template>
  <div class="footer">
    <div class="foot-con-box clearfix">
      <h6 class="font-cont-title">对我们的产品有任何疑问，请联系我们 <span>（工作时间周一至周五9:00-18:00）</span></h6>
      <div>
        <div class="font-con-box-tel">
          <div style="white-space:nowrap">400-088-8816</div>
        </div>
        <div class="font-con-box-email">
          <div>laike@jd.com<span class="pl15"></span></div>
        </div>
      </div>
      <div class="foot-ul-box clearfix">
        <a class="foot-left-logo" href="https://jr.jd.com" target="_blank"></a>
        <div class="foot-mid-list">
          <ul class="foot-link-list">
            <li v-for="(item, index) in footLeftList" :key="index"><a :href="item.link" target="_blank">{{item.name}}</a></li>
          </ul>
          <h6 class="copyright">Copyright © 2014-{{currentYear}} 京东JD.com版权所有</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "footer";
</style>
<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.pc-mode .foot-con-box {
  .font-con-box-email,
  .font-con-box-tel {
    span {
      font-family: "PingFang SC", "Microsoft YaHei";
      opacity: 0.7;
    }
  }
}
</style>
<script type="javascript">
export default {
  name: "h-footer",
  data() {
    return {
      footLeftList: [
        { name: "京东金融", link: "https://jr.jd.com" },
        { name: "京东商城", link: "https://www.jd.com" },
        {
          name: "关于京东金融",
          link: "https://jrhelp.jd.com/show/getProblemInfo?id=688"
        },
        {
          name: "免责声明",
          link: "https://jrhelp.jd.com/show/getProblemInfo-1677"
        },
        {
          name: "知识产权",
          link: "https://jrhelp.jd.com/show/getProblemInfo-3061"
        },
        {
          name: "隐私政策",
          link: "https://jrhelp.jd.com/show/getProblemInfo-2748"
        }
      ]
    };
  },
  computed: {
    currentYear: function() {
      var year = new Date().getFullYear();
      return year;
    }
  },
  methods: {},
  components: {}
};
</script>
