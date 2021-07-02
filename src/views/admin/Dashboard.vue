<template>
  <!-- 導覽列 -->
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
            >優惠券管理</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/dashboardProducts"
              class="nav-link"
            >商品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/dashboardOrders"
              class="nav-link"
            >訂單管理</router-link>
          </li>
          <li class="nav-item">
            <button
              type="buttom"
              class="nav-link btn fs-5 border-0 shadow-none"
              @click="logout"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 主要頁面 -->
  <router-view></router-view>
  <!-- 頁尾 -->
  <footer class="p-3 bg-brown">
    <p class="container text-center mx-auto my-0">
      作業使用，無商業行為
    </p>
  </footer>
</template>

<style lang="sass">
table
  background: white

.form-select:focus
  border-color: #926E60
  box-shadow: 0 0 0 0.15rem rgba(#926E60, .3)

.form-control:focus
  border-color: #926E60
  box-shadow: 0 0 0 0.15rem rgba(#926E60, .3)
.form-check-input:checked
  background-color: #F3C95F
  border-color: #4C2F28

.btn-close:focus
  box-shadow: 0 0 0 0.15rem rgba(#4C2F28, .2)

@media (min-width: 576px)
  .modal-dialog
    max-width: 800px
</style>

<script>
import { swalFn } from '@/methods/swal';

export default {
  name: 'Dashboard',
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
            this.loginStatus = true;
          } else {
            this.loginStatus = false;
            swalFn(res.data.message, 'warning', 3000, '即將於 3 秒後引導至登入畫面');
            setTimeout(() => { this.$router.push('/login'); }, 3000);
          }
        })
        .catch((err) => {
          console.dir('(失敗-後台)帳號認證', err);
          this.$router.push('/login');
        });
    },
    logout() { // 登出
      const url = `${process.env.VUE_APP_PATH}/logout`;
      swalFn('正在登出', 'info');

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          } else {
            console.log('(錯誤-後台)登出', res);
          }
        })
        .catch((err) => {
          console.dir('(失敗-後台)登出', err);
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
