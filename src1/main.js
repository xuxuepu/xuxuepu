import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Index from 'components/Index'

var router = new VueRouter()
router.map({
  '/index': {
    component: Index
  }
})

router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

