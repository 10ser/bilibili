import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/Home'
// import News from '@/pages/News'
// import Zone from '@/pages/Zone'
// import Dynamic from '@/pages/Dynamic'
import test from '@/pages/test'
const News = resolve => require(['@/pages/News.vue'], resolve)
const Zone = resolve => require(['@/pages/Zone.vue'], resolve)
const Dynamic = resolve => require(['@/pages/Dynamic.vue'], resolve)
const Home = resolve => require(['@/pages/Home.vue'], resolve)
const Listcom = resolve => require(['@/components/Listcom.vue'], resolve)
const Login = resolve => require(['@/pages/Login.vue'], resolve)
const Register = resolve => require(['@/pages/Register.vue'], resolve)
const Livepage = resolve => require(['@/pages/Livepage.vue'], resolve)
const Videopage = resolve => require(['@/pages/Videopage.vue'], resolve)
const UserMsg = resolve => require(['@/pages/UserMsg.vue'], resolve)
const User = resolve => require(['@/pages/User.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/zone',
      name: 'Zone',
      component: Zone
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/listcom',
      name: 'listcom',
      component: Listcom
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/usermsg',
      name: 'usermsg',
      component: UserMsg
    },
    {
      path: '/livepage',
      name: 'livepage',
      component: Livepage
    },
    {
      path: '/videopage',
      name: 'videopage',
      component: Videopage
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
