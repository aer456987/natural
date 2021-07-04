<template>
  <footer
    class="p-3 text-center"
    :class="colors.backgroundColor"
  >
    <div class="row">
      .col*6*
    </div>
    <span>
      客服電話：(02)2308264 / (02)8650610
      服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00
      住址：台北市信義區林口街38巷109號6樓
    </span>
    <span
      class="d-block fs-4 mb-1"
      :class="colors.color"
    >
      <Font-awesome-icon
        :icon="['fab', 'facebook-square']"
        class="mx-1 pointer_no_hover"
        title="facabook 粉絲團"
      />

      <Font-awesome-icon
        :icon="['fab', 'instagram-square']"
        class="mx-1 pointer_no_hover"
        title="Instagram"
      />
      <Font-awesome-icon
        :icon="['fab', 'line']"
        class="mx-1 pointer_no_hover"
        title="@line 官方"
      />
      <i
        class="bi bi-github mx-1 pointer_no_hover"
        title="github"
      ></i>
    </span>
    <small
      class="container mx-auto my-0"
      :class="colors.color"
    >
      Copyright © 2021 ToriHa | 個人作業使用，無商業行為
    </small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['textColor', 'bgColor'],
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
