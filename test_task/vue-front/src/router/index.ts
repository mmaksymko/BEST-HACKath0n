import { createRouter, createWebHistory } from 'vue-router'
import CreditsView from '../views/CreditsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/credits',
      name: 'credits',
      component: CreditsView
    }
  ]
})

export default router
