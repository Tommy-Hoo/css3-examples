import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/test',
    //     name: 'test',
    //     component: r => require.ensure([], ()=> r(require('../docs/test.md')))
    // },
    {
      path: '/',
      name: 'index',
      redirect: '/intro'
    },
    {
      path: '/intro',
      name: 'intro',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-01-intro.md')))
    },
    {
      path: '/border',
      name: 'border',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-02-Border.md')))
    },
    {
      path: '/background',
      name: 'Background',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-03-Background.md')))
    },
    {
      path: '/gradient',
      name: 'Gradient',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-04-Gradient.md')))
    },
    {
      path: '/textures',
      name: 'Textures',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-05-Textures.md')))
    },
    {
      path: '/fonts',
      name: 'Fonts',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-06-Fonts.md')))
    },
    {
      path: '/transform',
      name: 'Transform',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-07-2D Transform.md')))
    },
    {
      path: '/transition',
      name: 'Transition',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-08-Transition.md')))
    },
    {
      path: '/animation',
      name: 'Transition',
      component: r => require.ensure([], ()=> r(require('../docs/CSS3-09-Animation.md')))
    }

  ]
})
