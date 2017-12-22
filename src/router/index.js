import Vue from 'vue'
import Router from 'vue-router'
import HT from '@/components/ht'
import Nav from '@/components/nav'
import Admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HT',
      component: HT
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
