<template>
  <div>
    <Header activeMenu="首页"/>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/head";
import Footer from "../components/footer/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: "首页"
    };
  },
  created(){
    this.$router.push({
        path: '/marketService/lkMarketing'
    })
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
