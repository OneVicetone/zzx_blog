module.exports = app => {
    // const dbPath = 'mongodb://blogAdmin:1067430126@172.18.58.208:27017/my_blog_server?authSource=my_blog_server'
    const dbPath = 'mongodb://localhost:27017/zzx_blog';
    const mongoose = require('mongoose')
    //设置自动连接数据库，不会出现时间长了数据库断开
    const options = {
        server: {
            auto_reconnect: true,
            poolSize: 10
        }
    }
    mongoose.connect(dbPath, {
        useNewUrlParser: true
    })

    mongoose.connection.on('disconnected', async () => {
        mongoose.connect(dbPath)
    })

    mongoose.connection.on('error', async err => {
        console.error(err)
    })

    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ', dbPath)
    })
}