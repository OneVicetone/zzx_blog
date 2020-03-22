<template>
    <div class="outer-box">
        <!-- <IndexWelcome></IndexWelcome> -->
        <div class="padding-box"></div>
        <MessageBox :messages="messages"></MessageBox>
    </div>
</template>

<script>
import MessageBox from '../components/messageBox.vue'
// import IndexWelcome from '../components/indexWelcome.vue'

export default {
    name:'Index',
    components:{
        MessageBox,
        // IndexWelcome
    },
    data(){
        return{
            messages:[]
        }
    },
    created(){
        this.$http.get('/getIndexMessages').then(res=>{
            this.messages = res.data
        })
    },
}
</script>

<style scoped>
.padding-box{
    width: 100vw;
    height: 10vh;
}
.outer-box{
    min-height: 100vh;
    text-align: center;
}
</style>
