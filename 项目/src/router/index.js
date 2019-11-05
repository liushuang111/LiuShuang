import Vue from 'vue'
import VueRouter from 'vue-router'
//一级
import Pages from '../views/Pages' 

//二级路由
import Home from '../views/Pages/Home'
import Thods from '../views/Pages/Thods'
import Big from '../views/Pages/Big'
import Less from '../views/Pages/Less'

//三级路由
import Dot from '../views/Pages/Home/Dot'
import Hot from '../views/Pages/Home/Hot'
import Pull from '../views/Pages/Home/Pull'

//我是详情
import Detail from '../Detail'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Detail
  },
    {
      path:'/',
      component:Pages,  //一级路由
      children:[ //二级路由
        {
          path:'/home',
          component:Home,
          children:[
            {
              path:'/home/dot',
              component:Dot
            },{
              path:'/home/pull',
              component:Pull
            },{
              path:'/home/hot',
              component:Hot
            },{
              path:'/home',
              redirect:'/home/dot'
            }
          ]
        },{
          path:'/thods',
          component:Thods
        },{
          path:'/big',
          component:Big
        },{
          path:'/less',
          component:Less
        },{
          path:'/',
          redirect:'/home'
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
