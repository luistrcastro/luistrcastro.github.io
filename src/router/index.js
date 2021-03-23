import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'calculator',
        name: 'Calculator',
        component: () => import('../components/calculator/CalcHome.vue'),
      },
      {
        path: 'petshop',
        name: 'Petshop',
        component: () => import('../views/petshop/Petshop.vue'),
      },
    ],
  },
  {
    path: '/hireme',
    name: 'HireMe',
    // route level code-splitting
    // this generates a separate chunk (HireMe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "HireMe" */ '../views/HireMe.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
