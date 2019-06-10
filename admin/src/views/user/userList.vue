<template>
    <el-table :data="userList">
        <el-table-column prop="user" label="账号" width="300"></el-table-column>
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <el-button type="text" @click="toEditUser(scope.row._id)">编辑</el-button>
                <el-button type="text" @click="enterDeleteUser(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data(){
        return{
            userList:[]
        }
    },
    methods:{
        async getUserList(){
            let res = await this.$http.get('/crud/adminUser')
            this.userList = res.data
        },
        toEditUser(id){
            this.$router.push(`/edituser/${id}`)
        },
        enterDeleteUser(row){
            this.$confirm(`是否删除标题为 ${row.user} 这个账号`,`提示`,{
                type: 'warning'
            }).then(()=>{
                this.deleteUser(row._id)
            }).catch(()=>{
                this.$message(`取消删除`)
            })
        },
        async deleteUser(id){
            let res = await this.$http.delete(`/crud/adminUser/${id}`)
            if(res.status == 200){
                this.$message({
                    type: `success`,
                    message: `删除成功！`
                })
                this.getUserList()
            }
        }
    },
    created(){
        this.getUserList()
    }
}
</script>
