import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import Archive from './components/Archive.vue'
import Single from './components/Single.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/all/:page': {
    name: 'archive',
    component: Archive
  },
  '/single/:id': {
    name: 'single',
    component: Single
  }
})

router.start(App, 'body')
