import Vue from 'vue'
import Router from 'vue-router'
import starTrail from '@/components/starTrail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starTrail',
      component: starTrail
    }
  ]
})
