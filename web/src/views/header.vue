<template>
    <div class="page">
        <transition name="nav-transition">
            <Nav v-if="navIsShow" :navList="navList" @closeNav="clickNav"></Nav>
        </transition>

        <div class='content'>
            <div id="header">
                <div class="nav-icon" @click="clickNav"><img src="../assets/navicon.svg" alt=""></div>
                <ul>
                    <li v-for="item in headerList" :key="item.name" @click="toUrl(item.url)"><img :src="item.icon" :alt="item.name"></li>
                </ul>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Nav from './nav.vue'
import navList from "../base/navList.js"
import headerList from "../base/headerList.js"

export default {
    components:{
        Nav
    },
    data(){
        return{
            navIsShow:false,
            navList:[],
            headerList:[]
        }
    },
    methods:{
        clickNav(){
            this.navIsShow = !this.navIsShow
            // 打开nav阻止滑动屏幕
            // if(this.navIsShow == true){
            //     this.noScroll()
            // }else if(this.navIsShow == false){
            //     this.canScroll()
            // }
        },
        toUrl(url){
                window.location = url
        }
    },
    created(){
        this.navList = navList
        this.headerList = headerList
    },
}
</script>


<style scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.page{
    height:auto;
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
}
#header{
    height: 10vh;
    width: 100vw;
    background: rgb(29,31,33);
    text-align: left;
    white-space: wrap;
    display: flex;
    align-items: center;
    box-shadow:3px 2px 2px #9E9E9E;
}
#header .nav-icon{
    width: 20px;
    height: 20px;
    margin-left: 4vw;
    display: inline-block;
    vertical-align: super;
}
#header .nav-icon img{
    width: 100%;
    height: 100%;
}
#header ul{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 40vw;
}
#header ul li{
    width: 20px;
    height: 20px;
    margin: 0 3vw;
    cursor: pointer;
}
#header ul li img{
    width: 100%;
    height: 100%;
    vertical-align: top;
}
.nav-transition-enter-active, .nav-transition-leave-active{
    transition: all .5s;
}
.nav-transition-enter-to{
    margin-left: 0;
}
.nav-transition-enter, .nav-transition-leave-to{
    margin-left: -60vw;
}
/* .stop-move{
    position: fixed;
} */
</style>
