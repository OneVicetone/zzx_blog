<template>
    <div>
        <!-- <IndexWelcome></IndexWelcome> -->
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
        this.$http.get('/web/api/getIndexMessages').then(res=>{
            this.messages = res.data
        })
    }
}
</script>
