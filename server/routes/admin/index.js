module.exports = app => {
    const express = require('express')
    const routes = express.Router({
        mergeParams:true
    })
    const Article = require('../../models/Article')

    routes.post('/uploadArticle',async (req,res)=>{
        const item = await Article.create(req.body)
        res.send(item)
    })

    routes.delete('/deleteArticleById/:id',async (req,res)=>{
        const item = await Article.findByIdAndDelete(req.params.id)
        res.send(item)
    })
    app.use('/admin/api',routes)
}