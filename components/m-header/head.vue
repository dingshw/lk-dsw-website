<template>
  <div class="header">
    <div class=header-bar :class="isFixed==true?'is-fixed':''">
      <div class="header-logo">
        <h1>
          <nuxt-link to="/marketService/lkMarketing">
            <img src="https://storage.jd.com/jdlk-website/jdlklogo2.png" alt="京东来客"/>
          </nuxt-link>
        </h1>
      </div>
      <div class="header-top-nav" >
        <img @click="changeMenu()" v-if="!showMenuFlag" src="http://storage.jd.com/jdlk-website/jdlk-menu.png" alt="京东来客-h5"/>
        <img v-else @click="changeMenu()" src="http://storage.jd.com/jdlk-website/menu-close.png" alt="关闭"/>
      </div>
    </div>
    <div class="header-menu" v-if="showMenuFlag">
      <div class="header-menu-close"></div>
      <ul class="menu-list">
        <template v-for="(item, index) in navItems" >
          <li 
            class="menu-item"
            :key="index"
            @click="changeSubMenu(index)"
          >
          <h2>
            <a class="active" @click="changeMenu()" v-if="activeMenu===item.name" >{{item.name}}</a>
            <nuxt-link :to="item.mlink" v-else>{{item.name}}</nuxt-link>
          </h2>
          <img v-if="item.showMenu===true" src="http://storage.jd.com/jdlk-website/menu-up.png" alt="up"/>
          <img v-if="item.showMenu===false" src="http://storage.jd.com/jdlk-website/menu-down.png" alt="down"/>
          </li>
          <ul :key="item.name" v-if="item.showMenu===true">
            <li class="menu-sub-item" v-for="(menu, index1) in item.downBox" :key="index1">
              <h2>
                <a class="active" @click="changeMenu()" v-if="activeMenu==menu.name" >{{menu.name}}</a>
                <nuxt-link :to="menu.mlink" v-else>{{menu.name}}</nuxt-link>
              </h2>
            </li>
          </ul>
        </template>
      </ul>
    </div>
  </div>
	
</template>
<script>
import navData from "../../data/header.json";
import { clearTimeout, setTimeout } from 'timers';

let menuTimer = null
export default {
  props: ['activeMenu'],
  data() {
    return {
      showMenuFlag: false,
      isFixed: false,
      navItems: navData.navName
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.body.classList.remove('bodyFixed')
  },
  beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeMenu() {
      this.showMenuFlag = !this.showMenuFlag
      if(this.showMenuFlag) {
        document.body.classList.add('bodyFixed')
      } else {
        document.body.classList.remove('bodyFixed')
      }
    },
    changeSubMenu(index) {
      if(this.navItems[index].showMenu===false || this.navItems[index].showMenu===true) {
        this.navItems[index].showMenu = !this.navItems[index].showMenu
      }
    },
    handleScroll() {
      let windowScrollY = window.scrollY;  
      if (windowScrollY > 0) {  
          this.isFixed = true;  
      } else {  
          this.isFixed = false;  
      }  
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./header";
</style>