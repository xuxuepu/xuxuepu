import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require(['../components/Home'], resolve)
      }
    },
    {
      path: '/essay',
      name: 'Essay',
      component: function (resolve) {
        require(['../components/Essay'], resolve)
      }
    },
    {
      path: '/essay/detail/:id',
      name: 'EssayDetail',
      component: function (resolve) {
        require(['../components/EssayDetail'], resolve)
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: function (resolve) {
        require(['../components/Find'], resolve)
      }
    },
    {
      path: '/about',
      name: 'About',
      component: function (resolve) {
        require(['../components/About'], resolve)
      }
    },
    {
      path: '/my',
      name: 'My',
      component: function (resolve) {
        require(['../components/My'], resolve)
      }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: function (resolve) {
        require(['../components/Resume'], resolve)
      }
    }
  ]
})
