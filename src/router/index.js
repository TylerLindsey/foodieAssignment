import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import ProfileView from '@/views/ProfileView.vue'
// import { component } from 'vue/types/umd' what is this?

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/search/:query?',
    name : 'search',
    component : SearchView
  },
  {
    path : '/profile/:name?',
    name: 'profile',
    component: ProfileView
    // component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
