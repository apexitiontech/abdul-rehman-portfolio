import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortFolioView.vue'),
    },
    {
      path: '/portfolio/:id',
      name: 'single-portfolio',
      component: () => import('../views/PortfolioDetail.vue'),
      props:true,
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
