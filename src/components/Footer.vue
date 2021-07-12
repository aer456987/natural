<template>
  <!-- 頁尾 -->
  <footer
    class="p-3 text-center"
    :class="colors.backgroundColor"
  >
    <template
      v-if="moreMsg"
    >
      <small class="row align-items-center">
        <nav class="nav-item mb-3">

          <ul class="row justify-content-center list-unstyled m-0">
            <li class="col-6 col-md-3 col-lg-2 col-xxl-1 scale">
              <router-link
                to="/"
                class="nav-link px-2 text-secondary"
              >
                首頁
              </router-link>
            </li>

            <li class="col-6 col-md-3 col-lg-2 col-xxl-1 scale">
              <router-link
                to="/about"
                class="nav-link px-2 text-secondary"
              >
                關於我們
              </router-link>
            </li>

            <li class="col-6 col-md-3 col-lg-2 col-xxl-1 scale">
              <router-link
                to="/products"
                class="nav-link px-2 text-secondary"
              >
                線上商城
              </router-link>
            </li>

            <li class="col-6 col-md-3 col-lg-2 col-xxl-1 scale">
              <router-link
                to="/QAndA"
                class="nav-link px-2 text-secondary"
              >
                常見問題
              </router-link>
            </li>

          </ul>
        </nav>

        <p
          class="mb-3"
          :class="colors.color"
        >
          住址：台北市信義區林口街38巷109號6樓 <br>
          客服電話：(02)2308264 / (02)8650610 <br>
          服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00 <br>
        </p>

      </small>
    </template>
    <span
      class="d-block fs-4 mb-1"
      :class="colors.color"
    >
      <Font-awesome-icon
        :icon="['fab', 'facebook-square']"
        class="mx-1 pointer_no_hover scale"
        title="facabook 粉絲團"
      />

      <Font-awesome-icon
        :icon="['fab', 'instagram-square']"
        class="mx-1 pointer_no_hover scale"
        title="Instagram"
      />
      <Font-awesome-icon
        :icon="['fab', 'line']"
        class="mx-1 pointer_no_hover scale"
        title="@line 官方"
      />

      <i class="fab fa-github-square"></i>
      <Font-awesome-icon
        :icon="['fab', 'github-square']"
        class="mx-1 pointer_no_hover scale"
        title="github"
      />
    </span>
    <small
      class="container mx-auto my-0"
      :class="colors.color"
    >
      Copyright © 2021 ToriHa 個人作業使用，無商業行為
    </small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['textColor', 'bgColor', 'moreMsg'],
  data() {
    return {
      colors: {
        color: '',
        backgroundColor: '',
      },
    };
  },
  mounted() {
    this.colors.color = this.textColor;
    this.colors.backgroundColor = this.bgColor;
  },
};
</script>
