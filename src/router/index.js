import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'

Vue.use(Router)

import home from '../pages/home'
import second from '../pages/second'
import third from '../pages/third'
import shop from '../pages/shop'
import fifth from '../pages/fifth'
import sixth from '../pages/sixth'
import seventh from '../pages/seventh'
import eighth from '../pages/eighth'
import detail from '../pages/detail'
import trolley from '../pages/trolley'
import balance from '../pages/balance'
import order from '../pages/order'
import myorder from '../pages/myorder'
import mygoods from '../pages/myorder/mygoods'
export default new Router({
    mode:'history',
    routes: [
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/second',component:second},
        {path:'/third',component:third},
        {path:'/shop',component:shop},
        {path:'/fifth',component:fifth},
        {path:'/sixth',component:sixth},
        {path:'/seventh',component:seventh},
        {path:'/eighth',component:eighth},
        {path:'/eighth',component:eighth},
        {path:'/detail',name:'detail',component:detail},
        {path:'/trolley',name:'trolley',component:trolley},
        {path:'/balance',name:'balance',component:balance},
        {path:'/order',name:'order',component:order},
        {
            path:'/myorder',
            component:myorder,
            children:[{
                path:'',
                name:'myorder',
                component:mygoods
            }]
        }
    ]
})
