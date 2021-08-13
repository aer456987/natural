<template>
  <footer
    class="user-select-none p-3 text-center"
    :class="colors.backgroundColor"
  >
    <template v-if="moreMsg">
      <small class="row align-items-center">
        <nav class="nav-item mb-3">
          <ul class="row justify-content-center list-unstyled m-0">
            <li class="col-md-2 p-md-0 col-lg-2 scale">
              <router-link
                to="/"
                class="nav-link px-2 text-secondary"
              >
                首頁
              </router-link>
            </li>

            <li class="col-md-2 p-md-0 col-lg-2 scale">
              <router-link
                to="/about"
                class="nav-link px-2 text-secondary"
              >
                關於我們
              </router-link>
            </li>

            <li class="col-md-2 p-md-0 col-lg-2 scale">
              <router-link
                to="/FAQ"
                class="nav-link px-2 text-secondary"
              >
                常見問答
              </router-link>
            </li>

            <li class="col-md-2 p-md-0 col-lg-2 scale">
              <router-link
                to="/products"
                class="nav-link px-2 text-secondary"
              >
                線上商城
              </router-link>
            </li>

            <li class="col-md-2 p-md-0 col-lg-2 scale">
              <router-link
                to="/cart"
                class="nav-link px-2 text-secondary"
              >
                購物車
              </router-link>
            </li>

          </ul>
        </nav>

        <ul :class="colors.color">
          <li>
            <p class="m-0">
              住址：台北市信義區林口街38巷109號6樓
            </p>
          </li>
          <li>
            <p class="m-0">
              客服電話：
              <a
                href="tel:+886-2-2308264"
                :class="colors.color"
              >
                (02)2308264
              </a>
              /
              <a
                href="tel:+886-2-2308264"
                :class="colors.color"
              >
                (02)8650610
              </a>
            </p>
          </li>
          <li>
            <p class="m-0 text-break">
              客服信箱：
              <a
                href="mailto:naturalConservation@gmail.com"
                :class="colors.color"
              >
                naturalConservation@gmail.com
              </a>
            </p>
          </li>
          <li>
            <p>服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00</p>
          </li>
        </ul>
      </small>
    </template>

    <ul class="d-flex justify-content-center fs-4 mb-1">
      <li>
        <a
          href="#"
          :class="colors.color"
          @click.prevent="$emit('backTop')"
        >
          <Font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="mx-1 pointer-no-hover scale"
            title="facabook 粉絲團" />
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="colors.color"
          @click.prevent="$emit('backTop')"
        >
          <Font-awesome-icon
            :icon="['fab', 'instagram-square']"
            class="mx-1 pointer-no-hover scale"
            title="Instagram" />
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="colors.color"
          @click.prevent="$emit('backTop')"
        >
          <Font-awesome-icon
            :icon="['fab', 'line']"
            class="mx-1 pointer-no-hover scale"
            title="@line 官方" />
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="colors.color"
          @click.prevent="$emit('backTop')"
        >
          <i class="fab fa-github-square"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="colors.color"
          @click.prevent="$emit('backTop')"
        >
          <Font-awesome-icon
            :icon="['fab', 'github-square']"
            class="mx-1 pointer-no-hover scale"
            title="github" />
        </a>
      </li>
    </ul>
    <p class="m-0">
      <small
        class="container mx-auto my-0"
        :class="colors.color"
      >
        Copyright © 2021 ToriHa 個人作業使用，無商業行為
      </small>
    </p>
  </footer>
</template>

<script>
export default {
  props: ['textColor', 'bgColor', 'moreMsg'],
  data() {
    return {
      colors: {
        color: '',
        backgroundColor: '',
      },
    };
  },
  emits: ['backTop'],
  mounted() {
    this.colors.color = this.textColor;
    this.colors.backgroundColor = this.bgColor;
  },
};
</script>
