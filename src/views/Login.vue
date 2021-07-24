<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="user_select_none p-5 bg-primary min-vh-100 mx-auto">
    <section class="row justify-content-center">
      <router-link
        to="/"
        class="nav-link logo_login h1 my-4 pb-0 text-center"
      >
        <Font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top"
        />
        Natural
      </router-link>

      <section class="col-md-6 col-xl-5 col-xxl-4 p-5 bg-white rounded-1 shadow">
        <h2 class="text-center fw-bold my-2">後台登入</h2>

        <div class="mb-2">
          <Form
            v-slot="{ errors }"
            @submit="login"
          >
            <label
              for="orderEmail"
              class="form-label mt-3 mb-1"
            >帳號</label>
            <Field
              type="email"
              name="Email"
              placeholder="請輸入email"
              id="orderEmail"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              rules="required|email"
              v-model="userDatas.username"
            ></Field>
            <ErrorMessage
              name="Email"
              class="invalid-feedback mb-1"
            ></ErrorMessage>

            <!-- 密碼 -->
            <label
              for="orderPs"
              class="form-label mt-3 mb-1"
            >密碼</label>
            <Field
              type="password"
              name="密碼"
              placeholder="請輸入密碼"
              id="orderPs"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="userDatas.password"
            ></Field>
            <ErrorMessage
              name="密碼"
              class="invalid-feedback mb-1"
            ></ErrorMessage>

            <p class="text-danger text-center my-3">{{ msg }}</p>

            <button
              type="submit"
              class="btn btn_main w-100 mt-1 mb-1"
            >
              登入
            </button>
          </Form>

          <span class="d-flex justify-content-center align-items-center">
            <router-link
              to="/"
              class="custom_success_link"
            >
              返回首頁
            </router-link>
            |
            <router-link
              to="/login"
              class="custom_success_link"
            >
              忘記密碼?
            </router-link>
          </span>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Login',
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
    login() { // 登入驗證
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
          this.msg = '登入失敗，請稍後再試';
          this.loadingStatus = false;
        });
    },
  },
};
</script>
