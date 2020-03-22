import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './base/axios'
Vue.config.productionTip = false
Vue.prototype.$http = http
console.log(router)
// 阻止页面滑动
// Vue.prototype.noScroll = function () {
//   let mo = function (e) { e.preventDefault() }
//   document.body.style.overflow = 'hidden'
//   document.addEventListener('touchmove', mo, false)// 禁止页面滑动
// }

// 打开页面滑动
// Vue.prototype.canScroll = function () {
//   var mo = function (e) {
//     e.preventDefault()
//   }
//   document.body.style.overflow = ''// 出现滚动条
//   document.removeEventListener('touchmove', mo, false)
// }



// window.onscroll = ()=>{
//   const body = document.getElementsByTagName('body')[0]
//   const scrollTop = document.documentElement.scrollTop
//   const bodyHeight = body.clientHeight
//   const windowHeight = window.innerHeight
//   const buttomNum = bodyHeight - (scrollTop + windowHeight)
// }


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
