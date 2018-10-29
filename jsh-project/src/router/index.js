import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Login from '../components/Login'
import About from '../components/About'
import Register from '../components/Register'
import News from '../components/News'
import Message from '../components/Message'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/Register',
      component: Register,      
    },
    {
      path: '/Login',
      component: Login,
      children: [
        {
          path: '/news',
          component: News,
        },
        {
          path: '/message',
          component: Message,
        }
      ]
    },
    {
      path: '/About',
      component: About,
    }

  ]
})
