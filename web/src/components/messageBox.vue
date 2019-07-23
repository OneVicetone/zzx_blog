<template>
    <div class="article-container">
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


<style>
.content-box{
    height: auto;
    border-radius: 3px;
    box-shadow:0px 2px 10px rgb(243, 241, 241);
    font-family: Palatino, "Palatino Linotype", "Book Antiqua", "Hoefler Text", Georgia, "Lucida Bright", Cambria, Times, "Times New Roman", serif;
}
/* .content-box:hover{
    box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    box-shadow:0px 6px 22px #BABABA;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
} */
.img-box{
    width: 100%;
    height: 20vh;
}
.img-box img{
    max-width: 100%;
    max-height: 100%;
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
    justify-content: space-between;
}
.content-by .icon{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-left: 20px;
}
.content-by .date{
    font-size: 12px;
    margin-right: 20px;
}
</style>

