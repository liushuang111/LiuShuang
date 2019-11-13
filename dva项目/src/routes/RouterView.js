import React from  'react'

import { Route,Switch,Redirect } from 'dva/router'

export default props=>{
    return <Switch>{
        props.routes.map((item,index)=>{
            return item.path && <Route key={index} path={item.path} render={(props)=>{
                //重定向的配置
                if(item.redirect){
                    return <Redirect exact from={item.path} to={item.redirect} />
                }
                //判断是否有子路由,如果有子路由吧路由注入新的组件
                if(item.children){
                    return <item.component {...props} routes={item.children} />
                }else{
                    return <item.component {...props} />
                }
            }
        }/>
    })
}</Switch>
}
