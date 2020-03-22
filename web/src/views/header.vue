<template>
  <div class="page">
    <transition name="nav-transition">
      <Nav v-if="navIsShow" :navList="navList" @closeNav="clickNav"></Nav>
    </transition>

    <div class="content">
      <transition name="header-transition">
        <div id="header">
          <div class="nav-icon" @click="clickNav">
            <img src="../assets/navicon.svg" alt />
          </div>
          <div class="nav-title">
            <p v-for="item in navList" :key="item.name" @click="linkTo(item.path)">{{item.name}}</p>
          </div>
          <ul>
            <li v-for="item in headerList" :key="item.name" @click="toUrl(item.url)">
              <img :src="item.icon" :alt="item.name" />
            </li>
          </ul>
        </div>
      </transition>
      <transition name="section-transition">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import navList from "../base/navList.js";
import headerList from "../base/headerList.js";

export default {
  components: {
    Nav
  },
  data() {
    return {
      navIsShow: false,
      navList: [],
      headerList: []
    };
  },
  methods: {
    clickNav() {
      this.navIsShow = !this.navIsShow;
      if (this.navIsShow) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
      // 打开nav阻止滑动屏幕
      // if(this.navIsShow == true){
      //     this.noScroll()
      // }else if(this.navIsShow == false){
      //     this.canScroll()
      // }
    },
    toUrl(url) {
      window.location = url;
    },
    linkTo(path) {
      this.$router.push(path);
    }
  },
  created() {
    this.navList = navList;
    this.headerList = headerList;
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.page {
  height: auto;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  z-index: 999;
}
#header {
  height: 10vh;
  width: 100vw;
  background: rgb(29, 31, 33);
  text-align: left;
  white-space: wrap;
  display: flex;
  align-items: center;
  box-shadow: 3px 2px 2px #9e9e9e;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
}
#header .nav-icon {
  width: 20px;
  height: 20px;
  margin-left: 4vw;
  display: inline-block;
  vertical-align: super;
}
#header .nav-icon img {
  width: 100%;
  height: 100%;
}
#header ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 2vw;
}
#header ul li {
  width: 20px;
  height: 20px;
  margin: 0 3vw;
  cursor: pointer;
}
#header ul li img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.nav-transition-enter-active,
.nav-transition-leave-active {
  transition: all 0.5s;
}
.nav-transition-enter-to {
  margin-left: 0;
}
.nav-transition-enter,
.nav-transition-leave-to {
  margin-left: -60vw;
}
.header-transition-enter-active,
.header-transition-leave-active {
  transition: all 0.5s;
}
.header-transition-enter-to {
  display: block;
}
.header-transition-enter,
.header-transition-leave-to {
  display: none;
}
.section-transition-enter,
.section-transition-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.section-transition-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.section-transition-enter-active,
.section-transition-leave-active {
  transition: all 0.5s ease-in;
}
</style>
