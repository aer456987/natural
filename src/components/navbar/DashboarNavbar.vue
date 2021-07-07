<template>
  <!-- 後台navbar -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-brown px-2 shadow-sm">
      <div class="container-fluid">
        <router-link
          to="/home"
          class="nav-link logo_brown h3 mb-0 p-0"
        >
          <Font-awesome-icon
            icon="crow"
            class="d-inline-block align-text-top"
          />
          Natural
        </router-link>
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
          <ul class="navbar-nav fs-5 text-center">
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
                type="buttom"
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
  </div>
</template>

<script>
import { swalFn } from '@/methods/swal';

export default {
  name: 'DashboarNavbar',
  methods: {
    logout() { // 登出
      const url = `${process.env.VUE_APP_PATH}/logout`;
      swalFn('正在登出', 'info');

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
            this.$router.push('/login');
          } else {
            console.di('(錯誤-後台)登出', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)登出');
          console.dir(err);
        });
    },
  },
};
</script>
