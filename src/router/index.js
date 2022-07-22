import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfilePageView from '../views/ProfilePageView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProfilePageView
  },
]



const router = new VueRouter({
  routes
})

export default router
