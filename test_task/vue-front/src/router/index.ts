import { createRouter, createWebHistory } from 'vue-router'
import CreditsView from '../views/CreditsView.vue'
import HomeView from '@/views/HomeView.vue'
import DepositViewVue from '@/views/DepositView.vue'
import ExpencesViewVue from '@/views/ExpencesView.vue'
import IncomeViewVue from '@/views/IncomeView.vue'
import LogInPopupVue from '@/components/LogInPopup.vue'
import SignUpPopupVue from '@/components/SignUpPopup.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LogInPopupVue
    },
    {
      path: '/register',
      name: 'register',
      component: SignUpPopupVue
    },
    {
      path: '/deposits',
      name: 'deposits',
      component: DepositViewVue
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: ExpencesViewVue
    },
    {
      path: '/revenues',
      name: 'revenues',
      component: IncomeViewVue
    },
    
  ]
})

export default router
