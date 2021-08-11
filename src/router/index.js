import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'FAQ',
        component: () => import('../views/front/FAQ.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/front/order/Order.vue'),
      },
      {
        path: 'order/:id',
        component: () => import('../views/front/order/OrderCheck.vue'),
      },
      {
        path: 'orderPaid',
        component: () => import('../views/front/order/OrderPaid.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'dashboardOrders',
        component: () => import('../views/admin/DashboardOrders.vue'),
      },
      {
        path: 'dashboardProducts',
        component: () => import('../views/admin/DashboardProducts.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/DashboardCoupon.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin/:pathMatch(.*)*',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
