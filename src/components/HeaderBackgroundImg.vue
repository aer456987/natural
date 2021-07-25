<template>
  <!-- 每頁banner -->
  <header class="header position-relative user_select_none">
    <h2
    class="title_style
      position-absolute top-50 start-50 translate-middle
      h1 fw-bold px-4 py-2 px-md-5 py-md-4"
    >
      {{ headerTitle }}
    </h2>

    <img
      class="img-fluid w-100 shadow"
      :src="headerImgUrl"
      alt="首圖"
    />
  </header>
</template>

<script>
export default {
  name: 'HeaderBackgroundImg',
  props: ['headerTitle', 'headerImgUrl'],
};
</script>
