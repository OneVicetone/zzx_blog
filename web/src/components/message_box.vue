<template>
    <div>
        <div class="content-box" v-for="(item,index) in messages" :key="index" @click="toArticlePage(item._id)">
            <div class='img-box'>
                <img :src="item.img" alt="">
            </div>
            <div class="text-box">
                <div class="text-box-in">
                    <h3>{{item.title}}</h3>
                    <span>{{item.simpleMessage}}</span>
                </div>
                <div class="content-by">
                    <img class="icon" :src="item.userIcon" alt="">
                    <span class="date">{{item.createTime}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["messages"],
    data(){
        return{
            
        }
    },
    methods:{
        toArticlePage(_id){
            this.$router.push(`/article/${_id}`)
        }
    }
}
</script>


<style scoped>
.content-box{
    width: 90vw;
    height: auto;
    border-radius: 3px;
    box-shadow:0px 6px 12px #BABABA;
    margin: 5vh auto;
    font-family: Georgia;
}
.img-box{
    width: 100%;
    height: auto;
}
.img-box img{
    width: 100%;
    height: 100%;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
}
.text-box{
    width: 100%;
    height: auto;
    text-align: left;
}
.text-box-in{
    width: 90%;
    margin: 0 auto;
}
.text-box-in h3{
    margin: 10px 0;
}
.text-box-in span{
    font-size: 12px;
}
.content-by{
    width: 100%;
    height: auto;
    margin-top: 2vh;
    padding-bottom: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.content-by .icon{
    width: 20px;
    height: 20px;
    border-radius: 20px;
}
.content-by .date{
    font-size: 2vw;
    margin-left: 40vw;
}
</style>

