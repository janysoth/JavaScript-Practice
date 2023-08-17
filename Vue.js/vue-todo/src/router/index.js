import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue';
import CityView from '../components/WeatherApp/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: "Home"
      }
    },
    {
      path: '/todo-app',
      name: 'To-Do App',
      component: TodosView,
      meta: {
        title: "Todo App"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },

    {
      path: '/Calculator',
      name: 'Calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalculatorApp.vue'),
      meta: {
        title: "Calculator App"
      }
    },
    {
      path: '/WeatherApp',
      name: 'WeatherApp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeatherAppView.vue'),
      meta: {
        title: "Weather App"
      }
    },
    {
      // /:state/:city are params
      // Use /: and param for the path
      path: '/WeatherApp/weather/:state/:city',
      name: 'cityView',
      component: CityView,
      meta: {
        title: "Current Weather"
      }
    },

  ]
});

// Target the route before enter
// Need to put next(); to show the content of the page
// If there's params for state, show the city and state
// If not, show the title only
router.beforeEach((to, from, next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title} | Jonny Vorn Soth`;
  next();
});

export default router;
