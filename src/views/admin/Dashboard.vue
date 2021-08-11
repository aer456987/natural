<template>
  <DashboardLoading :status="loadingStatus" />
  <DashboardNavbar />

  <router-view v-if="loginStatus"></router-view>

  <Footer
    :bgColor="'bg-brown'"
    :textColor="'text-dark'"
    :moreMsg="false"
    @back-top="backTop" />

  <GoToTopBtn
    :is-show="false"
    :bg-Color="'bg-brown-500'"
    @back-top-btn="backTop" />
</template>

<script>
import { swalFn, errorSwalFn, checkLoginErrorSwalFn } from '@/methods/swal';
import DashboardLoading from '@/components/loading/DashboardLoading.vue';
import DashboardNavbar from '@/components/navbar/DashboardNavbar.vue';
import Footer from '@/components/Footer.vue';
import GoToTopBtn from '@/components/GoToTopBtn.vue';

export default {
  data() {
    return {
      loginStatus: false,
      loadingStatus: false,
    };
  },
  components: {
    DashboardLoading,
    Footer,
    DashboardNavbar,
    GoToTopBtn,
  },
  methods: {
    checkLogin() {
      const url = `${process.env.VUE_APP_PATH}/api/user/check`;

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.loginStatus = true;
            this.loadingStatus = false;
          } else {
            this.loginStatus = false;
            document.cookie = 'hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
            checkLoginErrorSwalFn(res.data.message, 'warning');
            setTimeout(() => {
              this.$router.push('/login');
            }, 3000);
          }
        })
        .catch(() => {
          document.cookie = 'hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
          checkLoginErrorSwalFn('驗證錯誤', 'error');
          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        });
    },
    logout() {
      const url = `${process.env.VUE_APP_PATH}/logout`;
      swalFn('正在登出', 'info');

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
            this.$router.push('/login');
          } else {
            swalFn('登出失敗', 'error');
          }
        })
        .catch(() => {
          errorSwalFn('登出失敗', '請稍後再試');
        });
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.loadingStatus = true;
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
};
</script>

<style lang="scss">
table {
  background: white;
}

.form-select:focus {
  border-color: #926E60;
  box-shadow: 0 0 0 0.15rem rgba(#926E60, .3);
}

.form-control:focus {
  border-color: #926E60;
  box-shadow: 0 0 0 0.15rem rgba(#926E60, .3);
}

.form-check-input:checked {
  background-color: #F3C95F;
  border-color: #4C2F28;
}

.btn-close:focus {
  box-shadow: 0 0 0 0.15rem rgba(#4C2F28, .2);
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 800px;
  }
}
</style>
