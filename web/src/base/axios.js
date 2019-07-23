import axios from 'axios'

const http = axios.create({
    baseURL:'http://47.112.210.149:4000',
    timeout:3000
})

export default http