<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg
    navbar-dark bg-brown px-2 shadow">
    <div class="container-fluid">
      <router-link
        to="/"
        class="nav-link logo_brown h3 mb-0 p-0">
        <font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top" />
        Natural
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav fs-5 text-center">
          <li class="nav-item">
            <router-link to="/admin/coupon" class="nav-link">優惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/dashboardProducts" class="nav-link">商品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/dashboardOrders" class="nav-link">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/logout" class="nav-link"
              >登出</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 主要頁面 -->
  <router-view></router-view>
</template>

<script>
// import swal from 'sweetalert';

export default {
  data() {
    return {
      loginStatus: false,
    };
  },
  methods: {
    checkLogin() { // axios check 確認登入狀態
      const url = `${process.env.VUE_APP_PATH}/api/user/check`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(後台/成功)帳號認證', res);
            console.log('(後台/成功)登入確認OK');
            this.loginStatus = true;
            console.log(this.loginStatus);
          } else {
            console.log('(後台/成功)帳號認證', res);
            console.log('登入確認錯誤');
            this.loginStatus = false;
            console.log(this.loginStatus);
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.dir('前台帳號認證(失敗)', err);
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
};
</script>
