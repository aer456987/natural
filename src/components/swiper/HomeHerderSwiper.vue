<template>
  <swiper
    :="swiperSetting"
    class="mySwiper d-none d-md-block"
  >
    <swiper-slide
      v-for="headerImg in headerImgs"
      :key="headerImg.id"
      class="d-flex justify-content-center overflow-hidden"
    >
      <div>
        <img
          :src="headerImg.img"
          :alt="`首圖_${headerImg.id}`"
        >
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

export default {
  data() {
    return {
      swiperSetting: {
        centeredSlides: true,
        loop: true,
        FadeEffect: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
      },
      headerImgs: [
        {
          id: 0,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845839603.jpg',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845849808.jpg',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845856823.jpg',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845862968.jpg',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845877329.jpg',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845887531.jpg',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845895196.jpg',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
