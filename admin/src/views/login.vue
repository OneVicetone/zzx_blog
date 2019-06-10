<template>
    <div class="login-bg">
        <el-card :style="cardStyle">
            <h4>ZZX_ADMIN_LOGIN &nbsp;WELOCME!</h4>
            <el-form>
                <el-form-item label="账号">
                    <el-input v-model="user.user" suffix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item  label="密码" >
                    <el-input show-password v-model="user.password"></el-input>
                </el-form-item>
            </el-form>
            <div class="login-button"><el-button type="primary" icon="el-icon-arrow-right" circle @click="checkContent"></el-button></div>
        </el-card>
        <a class="markus" style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@markusspiske?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Markus Spiske"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Markus Spiske</span></a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                user:'',
                password:''
            },
            cardStyle:{
                width:'500px',
                height:'400px',
                margin:'200px auto'
            }
        }
    },
    methods:{
        checkContent(){
            if(this.user.user == '' || this.user.password == ''){
                this.$message({
                    type: 'warning',
                    message: '账号或者密码不能为空！'
                })
            }else{
                this.login()
            }
        },
        async login(){
            const res = await this.$http.post('/login',this.user)
            localStorage.token = res.data.token
            this.$router.push('/main')
            this.$message({
                type: `success`,
                message: `热烈欢迎用户 ${res.data.user} 的到来~`
            })
        }
    }
}
</script>

<style>
body{
    margin: 0;
}
.login-bg{
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url('../../public/markus-spiske-1613467-unsplash.jpg');
    background-size: contain;
    /* text-align: center; */
}
.login-button{
    width: 40px;
    margin: 5vh auto;
}
</style>
