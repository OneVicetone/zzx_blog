<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1','2']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>管理</template>
                <el-menu-item-group>
                  <template slot="title">文章管理</template>
                  <el-menu-item index="1-1" @click="linkTo('editArticle')">发布文章</el-menu-item>
                  <el-menu-item index="1-2" @click="linkTo('articlesList')">文章列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">管理员账号管理</template>
                  <el-menu-item index="2-1" @click="linkTo('editUser')">新建管理员账号</el-menu-item>
                  <el-menu-item index="2-2" @click="linkTo('userList')">管理员账号列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>编辑</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>{{userInfo.user}}</span>
            </el-header>
            
            <el-main>
            <!-- <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table> -->
            <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    data() {
      return{
        userInfo:{}
      }
    },
    methods:{
      linkTo(link){
        this.$router.push(`/${link}`)
      },
    },
    created(){
      // this.userInfo = JSON.parse(localStorage.userInfo)
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
