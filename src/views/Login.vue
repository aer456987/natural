<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="p-5 bg-primary min-vh-100 mx-auto">
    <section class="row justify-content-center">
      <router-link
        to="/"
        class="nav-link logo h1 my-4 pb-0 text-center">
        <Font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top" />
        Natural
      </router-link>

      <section class="col-md-8 col-xl-5 col-xxl-4 p-5 bg-white rounded-1 shadow">
        <h2 class="text-center fw-bold my-2">後台登入</h2>

        <div class="mb-3">
          <Form v-slot="{ errors }">
            <label
            for="orderEmail"
            class="form-label mt-3 mb-1"
              >帳號</label
            >
            <Field
              type="email"
              id="orderEmail"
              name="Email"
              placeholder="請輸入email"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              rules="required|email"
              v-model="userDatas.username"
            >
            </Field>
            <error-message
              name="Email"
              class="invalid-feedback mb-1"
            ></error-message>

            <!-- 密碼 -->
            <label for="orderPs" class="form-label mt-3 mb-1"
            >密碼</label>
            <Field
              type="password"
              id="orderPs"
              name="密碼"
              placeholder="請輸入密碼"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="userDatas.password"
            >
            </Field>
            <error-message
              name="密碼"
              class="invalid-feedback mb-1"
            ></error-message>
          </Form>

          <p class="text-danger text-center my-3">{{ msg }}</p>

          <button
            type="submit"
            class="btn btn_main w-100 mt-1 mb-2"
            @click="login">
            登入
          </button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
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
    login() { // 登入驗證
      const url = `${process.env.VUE_APP_PATH}/admin/signin`;
      this.loadingStatus = true;
      this.msg = '資料驗證中，請稍後';

      this.$http.post(url, this.userDatas)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功)登入 res:', res);
            this.msg = '登入成功';
            this.loadingStatus = false;
            this.$router.push('/admin/dashboardProducts');
          } else {
            console.log('(錯誤)登入 res:', res);
            this.msg = `${res.data.message}, 請檢查帳號密碼`;
            this.loadingStatus = false;
            return;
          }
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        })
        .catch((err) => {
          console.log('(失敗)登入 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
  },
};
</script>
