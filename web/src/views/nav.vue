<template>
    <div id="nav">
        <div class="user-info">
            <img src="../assets/android.svg" alt="">
            <p>ZZX</p>
        </div>
        <ul>
            <li v-for="item in navList" :key="item.name" @click="linkTo(item.path)">
                <!-- <router-link :to="item.path" style="color:white">{{item.name}}</router-link> -->
                {{item.name}}
            </li>
        </ul>
        <!-- <div @click="closeNav"> X </div> -->
    </div>
</template>

<script>

export default {
    props:["navList"],
    methods:{
        linkTo(path){
            this.$router.push(path)
            this.$emit("closeNav")
        }
        // closeNav(){
        //     this.$emit('close')
        // }
    },
    created(){
    }
}
</script>


<style scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
}
#nav{
    width: 70vw;
    height: 100vh;
    background: rgb(29,31,33);
    font-family: Georgia;
    text-align: center;
}
#nav ul li{
    width: 60vw;
    margin: 5vh 0;
    color: white;
    cursor: pointer;
}
#nav ul li:hover{
    color: wheat;
}
.user-info{
    text-align: center;
    margin: 5vh 0;
}
.user-info img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.user-info p{
    color: wheat;
    margin-top: 1vh;
}
</style>
