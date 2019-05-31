<template>
    <div>
        <div class="topImg">
            <img :src="article.img" alt="">
        </div>
        <div class="createUser">
            <img :src="article.userIcon" alt="">
            <span>{{article.createTime}}</span>
        </div>
        <div class="content">
            <h2>{{article.title}}</h2>
            <span>{{article.messageContent}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:["id"],
    data(){
        return{
            article:{}
        }
    },
    created(){
        this.$http.get(`/web/api/getArticleById/${this.id}`).then(res=>{
            this.article = res.data
        })
    }
}
</script>

<style scoped>
.topImg{
    width: 100vw;
    height: auto;
}
.topImg img{
    width: 100%;
    height: 100%;
}
.createUser{
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5vh;
}
.createUser img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: wheat;
}
.createUser span{
    font-family: Georgia;
    font-size: 3vw;
    margin-left: 40vw;
}
.content{
    height: auto;
    margin-top: 5vh;
}
</style>

