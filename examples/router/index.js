import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/test',
        name: 'test',
        component: r => require.ensure([], ()=> r(require('../docs/test.md')))
    },
    {
      path: '/intro',
      name: 'intro',
      component: r => require.ensure([], ()=> r(require('../docs/intro.md')))
    }
  ]
})
