import View from '../pages/view'
import Class from '../pages/view/Class'
import Member from '../pages/view/Member'
import My from '../pages/view/My'
import Shop from '../pages/view/Shop'
import Tohome from '../pages/view/Tohome'
import Global from '../pages/view/Tohome/Global'
import Super from '../pages/view/Tohome/Super'
import Detail from '../Detail/detail'
import Car from '../pages/view/Tohome/Super/car'
const route = [
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/',
        component:View,
        children:[
            {
                path:'/tohome',
                component:Tohome,
                children:[
                    {
                        path:'/tohome/global',
                        component:Global
                    },{
                        path:'/tohome/super',
                        component:Super
                    },{
                        path:'/tohome/super/car',
                        component:Car
                    },{
                        from:'/tohome',
                        to:'/tohome/super'
                    }
                ]
            },{
                path:'/class',
                component:Class
            },{
                path:'/member',
                component:Member
            },{
                path:'/shop/:id',
                component:Shop
            },{
                path:'/my',
                component:My
            },{
                from:'/',
                to:'/tohome'
            }
        ]
    }
]

export default route