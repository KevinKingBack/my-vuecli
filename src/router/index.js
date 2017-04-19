import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Bar from '../components/Home/Bar'
import Foo from '../components/Home/Foo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ],
  linkActiveClass: 'active'
})
