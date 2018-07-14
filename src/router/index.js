import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login' // @即在 src 文件夹下查找
import Home from '@/components/home/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }

  ]
})

// 导航守卫 运用全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 跳转页面前要判断 有没有登录过, 如过登录过 可以跳转 没登录过要跳转到登录页面
    const token = window.localStorage.getItem('token')
    if (token) {
      // 有token 则表示登陆过 则继续下面的页面跳转
      next()
    } else {
      // 没有 token 则证明没有登录过 则跳回登录页面
      // console.log(this)
      this.a.push('/login')
    }
  }
})
export default router
