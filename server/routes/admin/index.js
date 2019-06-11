module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const routes = express.Router({
        mergeParams:true
    })
    // const Article = require('../../models/Article')

    //校验token中间件
    const authMiddleware = async (req,res,next)=>{
        const userToken = String(req.headers.authorization || '').split(' ').pop()
        console.log(userToken)
        assert(userToken,401,'请重新登录')
        const {id} = jwt.verify(userToken,app.get('secret'))
        assert(id,401,'请重新登录')
        req.user = await AdminUser.findById(id)
        assert(req.user,401,'请先登录')
        await next()
    }

    routes.post('/',async (req,res)=>{
        const item = await req.Model.create(req.body)
        res.send(item)
    })

    routes.delete('/:id',async (req,res)=>{
        const item = await req.Model.findByIdAndDelete(req.params.id)
        res.send(item)
    })

    routes.put('/:id',async (req,res)=>{
        const item = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(item)
    })

    routes.get('/',async (req,res)=>{
        const item = await req.Model.find()
        res.send(item)
    })

    routes.get('/:id',async (req,res)=>{
        const item = await req.Model.findById(req.params.id)
        res.send(item)
    })

    app.use('/admin/api/crud/:resource',authMiddleware,async (req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },routes)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.use('/admin/api/upload',upload.single('file'),async (req,res)=>{
        const file = req.file
        file.url = `http://192.168.1.3:4000/uploads/${file.filename}`
        res.send(file)
    })

    app.use('/admin/api/login',async (req,res)=>{
        const {user,password} = req.body
        //1.根据用户名user找到用户
        const findUser = await AdminUser.findOne({user}).select('+password')
        if(!findUser){
            return res.status(422).send({
                msg:'用户不存在'
            })
        }
        //2.效验密码
        const passwordIsTrue = require('bcrypt').compareSync(password,findUser.password)
        if(!passwordIsTrue){
            return res.status(422).send({
                msg:'密码错误'
            })
        }
        //3.返回token
        const token = jwt.sign({id:findUser._id},app.get('secret'))
        res.send({
            token,
            user:findUser.user
        })
    })

    //错误信息处理
    app.use(async (err,req,res,next)=>{
        res.status(err.status || 500).send({
            msg:err.message
        })
    })
}