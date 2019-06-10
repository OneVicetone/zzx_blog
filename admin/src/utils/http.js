import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
    baseURL: 'http://192.168.1.3:4000/admin/api',
    timeout: 1000
})


http.interceptors.request.use(config=>{
    config.headers.Authorization = 'Bearer' + localStorage.token
    return config
},err=>{
    return Promise.reject(err)
})

http.interceptors.response.use(res=>{
    return res
},err=>{
    if(err.response.data.msg){
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.msg
        })
    }
    return Promise.reject(err)
})
export default http