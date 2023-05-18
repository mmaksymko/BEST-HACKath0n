import { createRouter, createWebHistory } from 'vue-router'
import CreditsView from '../views/CreditsView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/credits',
      name: 'credits',
      component: CreditsView
    },    
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
