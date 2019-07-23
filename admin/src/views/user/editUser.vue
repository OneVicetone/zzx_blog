<template>
    <el-form status-icon label-width="100px">
        <el-form-item label="账号">
            <el-input type="text" autocomplete="off" v-model="user.user"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="text" autocomplete="off" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="submit" @click="checkContent">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props:["id"],
    data(){
        return{
            user:{
                user:'',
                password:''
            }
        }
    },
    methods:{
        checkContent(){
            if(this.user.user == '' || this.user.password == ''){
                this.$message({
                    type: `warning`,
                    message: `输入内容不能为空`
                })
            }else if(this.id){
                this.putUser()
            }else{
                this.createUser()
            }
        },
        async getUserById(){
            const res =await this.$http.get(`/crud/adminUser/${this.id}`)
            this.user = res.data
        },
        async createUser(){
            const res = await this.$http.post('/crud/adminUser',this.user)
            if(res.status == 200){
                this.$router.push('/userList')
                this.$message({
                    type: `success`,
                    message: `添加账号成功！`
                })
            }
        },
        async putUser(){
            const res = await this.$http.put(`/crud/adminUser/${this.id}`,this.user)
            if(res.status == 200){
                this.$router.push('/userList')
                this.$message({
                    type: `success`,
                    message: `修改账号成功！`
                })
            }
        }
    },
    created(){
        if(this.id){
            this.getUserById()
        }
    }
}
</script>
