import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CfListView from '../views/CfListView.vue'
import ProfileView from '../views/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CfList',
    name: 'CfList',
    component: CfListView
  },
  {
    path: '/profiles/:id',
    name: 'Profiles',
    component: ProfileView
  }

]



const router = new VueRouter({
  routes
})

export default router
