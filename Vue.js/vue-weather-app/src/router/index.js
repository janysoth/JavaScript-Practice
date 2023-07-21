import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // /:state/:city are params
      // Use /: and param for the path
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView
    },

  ]
})

export default router