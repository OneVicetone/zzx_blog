module.exports = app => {
    const express = require('express')
    const routes = express.Router({
        mergeParams:true
    })
    const Article = require('../../models/Article')

    routes.post('/article',async (req,res)=>{
        const item = await Article.create(req.body)
        res.send(item)
    })

    routes.delete('/article/:id',async (req,res)=>{
        const item = await Article.findByIdAndDelete(req.params.id)
        res.send(item)
    })

    routes.put('/article/:id',async (req,res)=>{
        const item = await Article.findByIdAndUpdate(req.params.id,req.body)
        res.send(item)
    })

    routes.get('/article',async (req,res)=>{
        const item = await Article.find()
        res.send(item)
    })

    routes.get('/article/:id',async (req,res)=>{
        const item = await Article.findById(req.params.id)
        res.send(item)
    })

    app.use('/admin/api',routes)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.use('/admin/api/upload',upload.single('file'),async (req,res)=>{
        const file = req.file
        file.url = `http://192.168.1.3:4000/uploads/${file.filename}`
        res.send(file)
    })
}