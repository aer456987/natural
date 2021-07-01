<template>
  <swiper
    :centeredSlides="true"
    :loop="true"
    :FadeEffect="true"
    :autoplay='
      {
        "delay": 10000,
        "disableOnInteraction": false,
      }'
      :pagination='{
        "dynamicBullets": true,
      }'
    :navigation="true"
    class="mySwiper swiper_header"
  >

    <swiper-slide>
      <img src="../assets/imgs/head-1.jpg" alt="首圖" class="w-100">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/imgs/head-2.jpg" alt="首圖" class="w-100">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/imgs/head-3.jpg" alt="首圖" class="w-100">
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

export default {
  name: 'HomeHerderSwiper',
  data() {
    return {
      HeaderImgs: [],
    };
  },
  components: { Swiper, SwiperSlide },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>
