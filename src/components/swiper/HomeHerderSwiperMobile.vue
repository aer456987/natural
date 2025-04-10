<template>
  <swiper
    :="swiperSetting"
    class="mySwiper d-block d-md-none vh-100 w-100"
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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847542911.jpg',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847549174.jpg',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847553698.jpg',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847557540.jpg',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847562214.jpg',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847573581.jpg',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847578374.jpg',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
