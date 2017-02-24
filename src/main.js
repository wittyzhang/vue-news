// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
// 引入mint-ui(此处为完整引入mint-ui)
// 亦可部分引入 部分引入需要借住 babel-plugin-component 详情参考：http://mint-ui.github.io/docs/#!/zh-cn2/quickstart
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 开启debug模式
Vue.config.debug = true

// 引入组件
import App from './App'
import firstcomponent from './components/firstcomponent'
import secondcompontent from './components/secondcompontent'

// 定义vue路由、http请求、状态管理
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(MintUI)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  // mode: 'histoy',
  base: '/',
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcompontent
    }
  ]
})

 // 现在我们可以启动应用了！
 // 路由器会创建一个App实例，并且挂在到选择符#app匹配的元素上
const routerApp = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

export default routerApp
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
