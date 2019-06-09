import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from './views/main'
import editArticle from './views/editArticle'
import articlesList from './views/articlesList'


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            redirect: '/articlesList'
        },
        {
            path: '/main',
            component: Main,
            children:[
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
                }
            ]
        }
    ]
})
