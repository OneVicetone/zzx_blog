const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    img:{ type:String },
    title:{ type:String },
    simpleMessage:{ type:String },
    messageContent:{ type:String },
    userIcon:{ type:String },
    createTime:{ type:String }
})

module.exports = mongoose.model('Article',schema)