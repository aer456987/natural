<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-brown px-2 shadow-sm">
    <div class="container-fluid">
      <h1 class="m-0">
        <router-link
          to="/"
          class="nav-link custom-logo-brown mb-0 p-0 border border-white"
        >
          Natural
        </router-link>
      </h1>

      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarToggler"
        class="collapse navbar-collapse flex justify-content-end"
      >
        <ul class="navbar-nav navbar__text text-center">
          <li class="nav-item">
            <router-link
              to="/admin/coupon"
              class="nav-link"
            >
              優惠券管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/dashboardProducts"
              class="nav-link"
            >
              商品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/dashboardOrders"
              class="nav-link"
            >
              訂單管理
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-center">
            <button
              type="button"
              class="nav-link btn fs-5 shadow-none"
              @click="logout"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';

export default {
  methods: {
    logout() {
      const url = `${process.env.VUE_APP_PATH}/logout`;
      swalFn('正在登出', 'info');

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
            this.$router.push('/login');
          } else {
            errorSwalFn('登出失敗', '請重新操作');
          }
        })
        .catch(() => {
          errorSwalFn('登出失敗', '請重新操作');
        });
    },
  },
};
</script>
