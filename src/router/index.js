import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Essay from '../components/Essay'
import EssayDetail from '../components/EssayDetail'
import Find from '../components/Find'
import About from '../components/About'
import My from '../components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/essay',
      name: 'Essay',
      component: Essay
    },
    {
      path: '/essay/detail',
      name: 'EssayDetail',
      component: EssayDetail
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
