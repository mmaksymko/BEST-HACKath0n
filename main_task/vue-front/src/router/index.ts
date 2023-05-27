import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView from '@/views/ChatView.vue'
import HelpRequestModalVue from '@/views/RequestHelpView.vue'
import ProfileView from '@/views/ProfileView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
      
    },
    {
      path: '/help',
      name: 'help',
      component: HelpRequestModalVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
