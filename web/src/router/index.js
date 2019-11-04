import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/index.vue'

import Timeline from '../views/home/timeline'
import My from '../views/home/my'

import Login from '../views/login.vue'
import Register from  '../views/register.vue'
import Favor from '../views/favor.vue'
import Modify from '../views/modify.vue'
import Info from '../views/info.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 首页重定向到圈子
    name: 'home',
    redirect: '/home/timeline'
  },
  {
    path: '/login', // 登陆页面
    component: Login
  },
  {
    path: '/register',  // 注册页面
    component: Register
  },
  {
    path: '/favor', // 收藏页面
    component: Favor
  },
  {
    path: '/modify',  // 更改密码
    component: Modify
  },
  {
    path: '/info',  // 个人信息
    component: Info
  },
  {
    path: '/home',  // 首页
    component: Home,
    children: [{
      path: '/home/timeline', // 圈子
      component: Timeline
    },{
      path: '/home/my', // 我的
      component: My
    }]
  },
  {
    path: '/comment', // 评论
    component: null,
    children: [{
      path: '/comment/receive', // 收到的评论
      component: null
    },{
      path: '/comment/send',  //发出的评论
      component: null
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
