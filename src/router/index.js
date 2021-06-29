import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'products',
        name: '線上商城',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        name: '產品介紹頁面',
        component: () => import('../views/Product.vue'),
      },
    ],
  }, {
    path: '/square',
    name: '結帳流程',
    component: () => import('../views/Square.vue'),
    children: [
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'order',
        name: '訂單',
        component: () => import('../views/order/Order.vue'),
      },
      {
        path: 'order/:id',
        name: '訂單確認',
        component: () => import('../views/order/OrderCheck.vue'),
      },
      {
        path: 'orderPaid',
        name: '付款完成',
        component: () => import('../views/order/OrderPaid.vue'),
      },
    ],
  }, {
    path: '/login',
    name: '登入',
    component: () => import('../views/Login.vue'),
  }, {
    path: '/admin',
    name: '後台',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'dashboardOrders',
        name: '後台訂單頁',
        component: () => import('../views/admin/DashboardOrders.vue'),
      },
      {
        path: 'dashboardProducts',
        name: '後台商品頁',
        component: () => import('../views/admin/DashboardProducts.vue'),
      },
      {
        path: 'coupon',
        name: '後台優惠券',
        component: () => import('../views/admin/DashboardCoupon.vue'),
      },
      {
        path: 'logout',
        name: '登出',
        component: () => import('../views/admin/Logout.vue'),
      },
    ],
  }, {
    path: '/:pathMatch(.*)*',
    name: '404頁面',
    component: () => import('../views/NotFound.vue'),
  }, {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404頁面',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
