import Vue from 'vue'
import Router from 'vue-router'
import Header from './views/header.vue'
import About from './views/About.vue'
import Index from './views/index.vue'
import Article from './views/article.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
      redirect:'/index',
      children:[
        {
          path:'/index',
          component: Index,
        },
        {
          path:'/about',
          component:About
        },
        {
          path:'/article/:id',
          component: Article,
          props:true
        }
      ]
    },
  ]
})
