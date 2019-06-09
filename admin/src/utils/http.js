import axios from 'axios'

const http = axios.create({
    baseURL: 'http://192.168.1.3:4000/admin/api',
    timeout: 1000
})

export default http