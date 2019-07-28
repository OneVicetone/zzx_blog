<template>
    <div>
        <div class="topImg">
            <img :src="article.img" alt="">
        </div>
        <div class="createUser">
            <div>
                <img src="../assets/android.svg" alt="">
                <span>by ZZX</span>
            </div>
            <p>{{article.createTime}}</p>
        </div>
        <div class="article-text">
            <h2>{{article.title}}</h2>
            <div v-html="article.messageContent" class="article-content"></div>
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
        this.$http.get(`/getArticleById/${this.id}`).then(res=>{
            this.article = res.data
        })
    }
}
</script>

<style>
.topImg{
    width: 50vmin;
    height: auto;
    margin: 15vh auto 0;
}
.topImg img{
    width: 100%;
    height: 100%;
    /* padding-bottom: 30%; */
}
.createUser{
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;
}
.createUser img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: wheat;
}
.createUser div{
    text-align: center;
    display: flex;
    align-items: center;
    margin-left: 2vw;
}
.createUser div span{
    margin-left: 2vmax;
}
.createUser p{
    font-family: Palatino, "Palatino Linotype", "Book Antiqua", "Hoefler Text", Georgia, "Lucida Bright", Cambria, Times, "Times New Roman", serif;
    font-size: 3vmin;
    margin-right: 2vmax;
}
.article-text{
    margin: 5vh auto;
}
.article-text>h2{
    font-family: Palatino, "Palatino Linotype", "Book Antiqua", "Hoefler Text", Georgia, "Lucida Bright", Cambria, Times, "Times New Roman", serif;
    margin: 1vh 0 1vh 2vw;
}
.article-text .article-content{
    width: 95vw;
    margin: 0 auto;
    font-family: Palatino, "Palatino Linotype", "Book Antiqua", "Hoefler Text", Georgia, "Lucida Bright", Cambria, Times, "Times New Roman", serif;
}
pre{
    width: 90vw;
    height: auto;
    background: rgb(29,31,33);
    padding: 1vh 2.5vw;
    border-radius: 3px;
    margin: 1vh auto;
    color: #cacaca;
    line-height: 2.5vh;
    overflow: auto;
}
ol , ul{
    margin-left: 5vmin;
}
.article-content p{
    padding-bottom: 1vmax;
}
</style>

