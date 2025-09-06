import { createRouter, createWebHistory } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './main.js';  // import the auth instance from main.js

import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/protected', component: HomeComponent, meta: { requiresAuth: true } },
  { path: '/profile', component: ProfileComponent },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = null;

  onAuthStateChanged(auth, (user) => {
    currentUser = user;

    if (requiresAuth && !currentUser) {
      next('/login');
    } else {
      next();
    }
  });
});

export default router;
