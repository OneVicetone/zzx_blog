<template>
    <el-form status-icon label-width="100px">
        <el-form-item label="标题">
            <el-input type="text" autocomplete="off" v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="预览图片">
            <el-upload
                class="avatar-uploader"
                action="http://192.168.1.3:4000/admin/api/upload"
                :show-file-list="false"
                :on-success="uploadSuccess">
                    <img v-if="article.img" :src="article.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="内容">
            <vue-editor v-model='article.messageContent' useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="submit" @click="checkContent">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    components:{
        VueEditor
    },
    props:["id"],
    data(){
        return{
            article:{
                title:'',
                img:'',
                messageContent:'',
                createTime:''
            }
        }
    },
    methods:{
        uploadSuccess(res){
            this.article.img = res.url
        },
        createArticleTime(){
            const time = new Date()
            const createTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
            this.article.createTime = createTime
        },
        async handleImageAdded(file,Editor,cursorLocation,resetUploader){
            const formData = new FormData()
            formData.append('file',file)
            const res = await this.$http.post('/upload',formData)
            Editor.insertEmbed(cursorLocation,'image',res.data.url)
            resetUploader()
        },
        checkContent(){
            if(this.article.messageContent == '' || this.article.title == ''){
                this.$message({
                    type: `warning`,
                    message: `输入内容不能为空`
                })
            }else if(this.article.img == ''){
                this.$message({
                    type: `warning`,
                    message: `请上传一张主要图片`
                })
            }else if(this.id){
                this.putArticle()
            }else{
                this.createArticle()
            }
        },
        async createArticle(){
            this.createArticleTime()
            const res = await this.$http.post('/article',this.article)
            if(res.status == 200){
                this.$router.push('/articlesList')
                this.$message({
                    type: `success`,
                    message: `添加文章成功！`
                })
            }
        },
        async getArticleById(){
            const res =await this.$http.get(`/article/${this.id}`)
            this.article = res.data
        },
        async putArticle(){
            console.log(`haha`)
            const res = await this.$http.put(`/article/${this.id}`,this.article)
            if(res.status == 200){
                this.$router.push('/articlesList')
                this.$message({
                    type: `success`,
                    message: `修改文章成功！`
                })
            }
        }
    },
    created(){
        if(this.id){
            this.getArticleById()
        }
    }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
