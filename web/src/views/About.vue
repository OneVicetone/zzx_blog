<template>
  <div class="about">
    <!-- <IndexWelcome></IndexWelcome> -->
    <button @click="postArticles">新增article</button>
    <input type="text" v-model="id" placeholder="输入id删除">
    <button @click="deletArticles">删除article</button>
  </div>
</template>

<script>
// import IndexWelcome from '../components/indexWelcome.vue'
export default {
  components:{
    // IndexWelcome
  },
  data(){
    return{
      id:''
    }
  },
  methods:{
    postArticles(){
      this.$http.post('/admin/api/uploadArticle',{
        img:"http://images2.fanpop.com/images/photos/7800000/Nature-Full-HD-Wallpaper-national-geographic-7822726-1920-1080.jpg",
        title:"Multer",
        simpleMessage:"222222222222",
        messageContent:"<code><body></body></code>",
        userIcon:"../assets/android.svg",
        createTime:"2019-05-20 15:32"
      }).then(res=>{
        console.log(res)
      })
    },
    deletArticles(){
      if(this.id !== ''){
        this.$http.delete(`/admin/api/deleteArticleById/${this.id}`).then(res=>{
          console.log(res)
        })
      }else{
        return
      }
    }
  }
}
</script>

<style scoped>
.about{
  height: auto;
}
</style>

