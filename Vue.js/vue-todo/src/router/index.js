import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue';
import CityView from '../components/WeatherApp/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/todo-app',
      name: 'To-Do App',
      component: TodosView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/Calculator',
      name: 'Calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalculatorApp.vue')
    },
    {
      path: '/WeatherApp',
      name: 'WeatherApp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeatherAppView.vue')
    },
    {
      // /:state/:city are params
      // Use /: and param for the path
      path: '/WeatherApp/weather/:state/:city',
      name: 'cityView',
      component: CityView,
    },

  ]
})

export default router
