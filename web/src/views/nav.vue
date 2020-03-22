<template>
  <div id="nav" :style="{height:navHeight}">
      <div class="null-div"></div>
      <div class="nav-container">
    <div class="user-info">
      <img src="../assets/pig.svg" alt />
      <p>ZZX</p>
    </div>
    <ul>
      <li v-for="item in navList" :key="item.name" @click="linkTo(item.path)">
        <!-- <router-link :to="item.path" style="color:white">{{item.name}}</router-link> -->
        {{item.name}}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
        navHeight:''
    };
  },
  methods: {
    linkTo(path) {
      this.$router.push(path);
      this.$emit("closeNav");
    }
    // closeNav(){
    //     this.$emit('close')
    // }
  },
  created() {
      this.navHeight = document.getElementsByTagName('html')[0].scrollHeight + 'px'
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
#nav {
  width: 70vw;
  height: 100vh;
  background: rgb(29, 31, 33);
  font-family: Georgia;
  text-align: center;
  position: relative;
  z-index: 999;
}

#nav ul li {
  width: 60vw;
  margin: 5vh 0;
  color: white;
  cursor: pointer;
}
#nav ul li:hover {
  color: wheat;
}
.user-info {
  text-align: center;
  margin: 5vh 0;
}
.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.user-info p {
  color: wheat;
  margin-top: 1vh;
}
.null-div{
    width: 70vh;
}
.nav-container{
    position: fixed;
    z-index: 999;
}
</style>
