import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/posts/:id',
      name: '/posts/:id',
      component: () => import('../views/posts/View.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/posts/add',
      name: '/posts/add',
      component: () => import('../views/posts/Add.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/posts/edit/:id',
      name: '/posts/edit/:id',
      component: () => import('../views/posts/Update.vue'),
      meta: { requiresAuth: true },
    },
    // {
    //   path: '/:pathMatch(.*)*', // Catch-all for undefined routes
    //   name: 'not-found',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ],
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token, redirect to the login page
      next({ name: 'login' });
    } else {
      // If there's a token, allow access
      next();
    }
  } else {
    // If the route doesn't require auth, just continue
    next();
  }
});

export default router
