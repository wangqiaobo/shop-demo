import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // @即在 src 文件夹下查找

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
