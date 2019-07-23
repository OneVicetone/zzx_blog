module.exports = options =>{
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
    const assert = require('http-assert')
    return async (req,res,next)=>{
        const userToken = String(req.headers.authorization || '').split(' ').pop()
        assert(userToken,401,'请重新登录')
        const {id} = jwt.verify(userToken,req.app.get('secret'))
        assert(id,401,'请重新登录')
        req.user = await AdminUser.findById(id)
        assert(req.user,401,'请先登录')
        await next()
    }
}