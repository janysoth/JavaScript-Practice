import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // Add title to each route
      meta: {
        title: "Home",
      }
    },
    {
      // /:state/:city are params
      // Use /: and param for the path
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView,
      // Add title to each route
      meta: {
        title: "Weather",
      }
    },

  ]
});

// To Set Tab Title
// next () to load the rest of the page content
router.beforeEach((to, from, next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}` : to.matched[0].meta.title} | The Local Weather`;
  next();
})

export default router
