module.exports = app => {
    const mongoose = require('mongoose')
    //设置自动连接数据库，不会出现时间长了数据库断开
    const options = {
        server: {
            auto_reconnect: true,
            poolSize: 10
        }
    }
    mongoose.connect('mongodb://blogAdmin:1067430126@172.18.58.208:27017/my_blog_server?authSource=my_blog_server',{
        useNewUrlParser:true
    },options)
}