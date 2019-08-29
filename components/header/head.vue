<template>
  <div class="header">
    <div class=header-bar>
      <div class="header-logo">
        <h1>
          <nuxt-link to="/marketService/lkMarketing">
            <img src="https://storage.jd.com/jdlk-website/jdlklogo2.png" alt="京东来客"/>
          </nuxt-link>
        </h1>
      </div>
      <div class="header-top-nav">
        <ul class="header-nav-list">
          <li 
            class="header-nav-item" 
            v-for="(item, index) in navItems" 
            :key="index"
            @mouseover="showMenu(index)" 
            @mouseout="hideMenu(index)"
          >
            <h2 class="nav-item-h2">
              <nuxt-link :to="item.link" :class="activeMenu===item.name && 'active'">{{item.name}}</nuxt-link>
            </h2>
            <div 
              :style="{display: item.showMenu&&showSubMenu===index ? 'block':'none'}" 
              class="hd_menu_dropdown header-waterfall"
            >
              <ul>
                <li v-for="(menu, index1) in item.downBox" :key="index1" class="dropdown-item">
                  <h2>
                    <nuxt-link :to="menu.link" :class="activeMenu===menu.name && 'active'">{{menu.name}}</nuxt-link>
                  </h2>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
	
</template>
<script>
import navData from "../../data/header.json";
import { clearTimeout, setTimeout } from 'timers';

let menuTimer = null
export default {
  props: ["activeMenu"],
  data() {
    return {
      navItems: navData.navName,
      showSubMenu: -1,
    }
  },
  methods: {
    showMenu(index) {
      this.showSubMenu = index
      this.navItems[index].showMenu = true
      clearTimeout(menuTimer)
    },
    hideMenu(index) {
      const that = this
      menuTimer = setTimeout(function() {
        that.navItems[index].showMenu = false
        that.showSubMenu = -1
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./header";
</style>