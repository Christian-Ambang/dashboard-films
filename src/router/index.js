import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (category.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      // route level code-splitting
      // this generates a separate chunk (favorite.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FavoriteView.vue')
    }
  ]
})

export default router
