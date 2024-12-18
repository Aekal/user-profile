import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/ProfileEditView.vue'),
    },
  ],
})

export default router
