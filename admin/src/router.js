import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from './views/main'
import editArticle from './views/article/editArticle'
import articlesList from './views/article/articlesList'

import editUser from './views/user/editUser'
import userList from './views/user/userList'

import login from './views/login'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/main',
            component: Main,
            children:[
                //article
                {
                    path: '/editArticle',
                    component: editArticle
                },
                {
                    path: '/editArticle/:id',
                    component: editArticle,
                    props: true
                },
                {
                    path: '/articlesList',
                    component: articlesList
                },
                //user
                {
                    path: '/editUser',
                    component: editUser
                },
                {
                    path: '/editUser/:id',
                    component: editUser,
                    props: true
                },
                {
                    path: '/userList',
                    component: userList
                },
            ]
        },
        {
            path: '/login',
            component: login
        }
    ]
})
