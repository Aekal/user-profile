import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/ProfileEditView.vue'),
    },
  ],
})

export default router
