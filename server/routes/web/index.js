module.exports = app => {
    const express = require('express')
    const routes = express.Router({
        mergeParams:true
    })
    const Article = require('../../models/Article')
    routes.get('/getIndexMessages',async (req,res)=>{
        const item = await Article.find()
        res.send(item)
    })

    routes.get('/getArticleById/:id',async (req,res)=>{
        const item = await Article.findById(req.params.id)
        res.send(item)
    })

    app.use('/web/api',routes)
}