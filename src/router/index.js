import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/view_attendance',
    name: 'CheckTable',
    component: () => import('../views/CheckTable.vue'),
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue'),
  },
  {
    path: '/selectioncheck',
    name: 'ChoiceForCheck',
    component: () => import('../views/ChoiceForCheck.vue'),
  },
  {
    path: '/selectionnew',
    name: 'ChoiceForNew',
    component: () => import('../views/ChoiceForNew.vue'),
  },
  {
    path: '/save_attendance',
    name: 'CheckTable',
    component: () => import('../views/SaveTable.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
