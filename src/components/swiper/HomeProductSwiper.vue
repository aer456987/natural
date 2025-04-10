<template>
  <swiper
    :="swiperSetting"
    class="mySwiper"
    data-aos="zoom-in-down"
    data-aos-anchor-placement="center-bottom"
    data-aos-delay="100"
    data-aos-duration="1000"
  >
    <swiper-slide
      class="p-0 position-relative swiper__product__content"
      v-for="headerImg in headerImgs"
      :key="headerImg.id"
    >
      <router-link to="/products">
        <img
          :src="headerImg.imgUrl"
          :alt="`介紹圖片_${headerImg.id + 1}`"
          class="w-100 rounded-2"
        >
        <h3 class="swiper__product__title position-absolute m-0">
          {{ headerImg.title }}
          <span class="swiper__product__text py-1 d-block fs-6">
            {{ headerImg.text }}
          </span>
        </h3>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default {
  data() {
    return {
      swiperSetting: {
        slidesPerView: 2,
        spaceBetween: 10,
        effect: 'coverflow',
        grabCursor: false,
        loop: true,
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      },
      headerImgs: [
        {
          id: 0,
          title: '募款專案',
          text: '積沙成塔，愛就無限大',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625205083110.jpg',
        },
        {
          id: 1,
          title: '公益活動',
          text: '環境保育，用行動表示',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625204113983.jpg',
        },
        {
          id: 2,
          title: '講座',
          text: '透過語言，講述台灣之美',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625195317039.jpg',
        },
        {
          id: 3,
          title: '有機商品',
          text: '當季蔬果，新鮮無農藥',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625195311517.jpg',
        },
        {
          id: 4,
          title: '環保商品',
          text: '減塑行動，從你我開始',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625202999417.jpg',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
