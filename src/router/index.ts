import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { levelAuth: 0 }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { levelAuth: 0 }
  },
  {
    path: '/organisation',
    name: 'organisation',
    component: () => import('../views/OrganisationView.vue'),
    meta: { levelAuth: 1 }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
    meta: { levelAuth: 1 }
  },
  {
    path: '/teams',
    name: 'teams',
    component: ()=> import('../views/ListTeamsView.vue'),
    meta: { levelAuth: 0 }
  },
  {
    path: '/organisations',
    name: 'organisations',
    component: ()=> import('../views/ListOrgsView.vue'),
    meta: { levelAuth: 0 }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
