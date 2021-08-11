<template>
  <Loading :status="loadingStatus" />

  <main class="user-select-none p-5 bg-primary min-vh-100 mx-auto">
    <section class="row justify-content-center">
      <h1 class="m-0 d-flex justify-content-center">
        <router-link
          to="/"
          class="nav-link custom-logo-login my-3 my-md-4 pb-0"
        >
          Natural
        </router-link>
      </h1>

      <section class="col-md-6 col-xl-5 col-xxl-4 p-5 bg-white rounded-1 shadow">
        <h2 class="text-center fw-bold my-2">
          後台登入
        </h2>

        <div>
          <Form
            v-slot="{ errors }"
            @submit="login"
          >
            <label
              for="orderEmail"
              class="form-label mt-3 mb-1"
            >
              帳號
            </label>
            <Field
              type="email"
              name="Email"
              placeholder="請輸入email"
              autocomplete="off"
              id="orderEmail"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              rules="required|email"
              v-model="userDatas.username" />
            <ErrorMessage
              name="Email"
              class="invalid-feedback mb-1" />

            <label
              for="orderPs"
              class="form-label mt-3 mb-1"
            >
              密碼
            </label>
            <Field
              type="password"
              name="密碼"
              placeholder="請輸入密碼"
              autocomplete="off"
              id="orderPs"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="userDatas.password" />
            <ErrorMessage
              name="密碼"
              class="invalid-feedback mb-1" />

            <p class="text-danger text-center my-3">
              {{ msg }}
            </p>

            <button
              type="submit"
              class="btn custom-btn-main w-100 mt-1 mb-1"
            >
              登入
            </button>
          </Form>

          <div class="d-flex justify-content-center align-items-center">
            <router-link
              to="/"
              class="custom-link-success"
            >
              返回首頁
            </router-link>
            |
            <button
              type="button"
              class="custom-link-success border-0 bg-transparent"
              @click="openPasswordMassage"
            >
              忘記密碼?
            </button>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { passwordMassageSwalFn } from '@/methods/swal';

export default {
  data() {
    return {
      loadingStatus: false,
      userDatas: {
        username: '',
        password: '',
      },
      msg: '',
    };
  },
  methods: {
    login() {
      const url = `${process.env.VUE_APP_PATH}/admin/signin`;
      this.loadingStatus = true;
      this.msg = '資料驗證中，請稍後';

      this.$http.post(url, this.userDatas)
        .then((res) => {
          if (res.data.success) {
            this.msg = '登入成功';
            this.loadingStatus = false;
            this.$router.push('/admin/dashboardProducts');
          } else {
            this.msg = `${res.data.message}, 請檢查帳號密碼`;
            this.loadingStatus = false;
            return;
          }
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        })
        .catch(() => {
          this.msg = '登入異常，請稍後再試';
          this.loadingStatus = false;
        });
    },
    openPasswordMassage() {
      passwordMassageSwalFn();
    },
  },
};
</script>
