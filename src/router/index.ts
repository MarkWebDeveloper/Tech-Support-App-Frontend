import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/tickets',
      name: 'tickets',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TicketsView.vue')
    },
    {
      path: '/pending',
      name: 'pending-tickets',
      component: () => import('../views/PendingTicketsView.vue')
    },
    {
      path: '/create',
      name: 'create-ticket',
      component: () => import('../views/NewTicketView.vue')
    },
    {
      path: '/edit',
      name: 'edit-tickets',
      component: () => import('../views/EditTicketView.vue')
    },
    {
      path: '/resolved',
      name: 'resolved-tickets',
      component: () => import('../views/ResolvedTicketView.vue')
    },
  ]
})

export default router
