<template>
  <div>
    <header class="header position-relative">
      <span>
        <h1
        class="title_style position-absolute top-50 start-50 translate-middle
          fw-bold px-2 py-2 px-md-5 py-md-4"
        >
          {{ headerTitle }}
        </h1>
      </span>

      <img
        class="img-fluid w-100 shadow"
        :src="headerImgUrl"
        alt="首圖"
      />
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackgroundImg',
  props: ['headerTitle', 'headerImgUrl'],
};
</script>
