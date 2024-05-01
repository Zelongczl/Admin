import Vue from 'vue'
import VueRouter from 'vue-router'
import indexView from '@/views/indexView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexView
  },
  {
    path: '/chapter',
    name: 'chapter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/chapterView.vue')
  },
  {
    path: '/comic',
    name: 'comic',
    component: () => import(/* webpackChunkName: "about" */ '../views/comicView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
