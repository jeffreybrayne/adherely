import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import firebase from '@/services/firebase'
import { getAuth } from 'firebase/auth'
const auth = getAuth()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/secret',
      name: 'secret',
      meta: {
        authRequired: true
      },
      component: () => import('../views/Secret.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router
