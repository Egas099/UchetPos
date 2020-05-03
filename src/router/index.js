import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/view_attendance',
    name: 'Check_table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Check_table.vue'),
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import(/* webpackChunkName: "about" */ '../views/Authorization.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
