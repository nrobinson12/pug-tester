import Vue from 'vue'
import Router from 'vue-router'
import PugTester from '@/components/PugTester'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PugTester',
      component: PugTester
    }
  ]
})
