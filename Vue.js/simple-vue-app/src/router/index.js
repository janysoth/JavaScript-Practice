import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoApp from '../views/TodoApp.vue'
import todoAppV2 from '../views/todoAppV2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/todo-app',
    name: 'todo-app',
    component: TodoApp
  },

  {
    path: '/todo-app-v2',
    name: 'todo-app-v2',
    component: todoAppV2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
