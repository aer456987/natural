import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: '登入',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    children: [
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'FAQ',
        name: '常見問答',
        component: () => import('../views/front/FAQ.vue'),
      },
      {
        path: 'products',
        name: '線上商城',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        name: '產品介紹頁面',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'order',
        name: '訂單',
        component: () => import('../views/front/order/Order.vue'),
      },
      {
        path: 'order/:id',
        name: '訂單確認',
        component: () => import('../views/front/order/OrderCheck.vue'),
      },
      {
        path: 'orderPaid',
        name: '付款完成',
        component: () => import('../views/front/order/OrderPaid.vue'),
      },
    ],
  },
  {
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
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404頁面',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: '登入' },
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
