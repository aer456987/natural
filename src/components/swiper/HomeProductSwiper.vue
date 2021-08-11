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
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625205083110.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XSaQxIWI%2B8Yhjq5Rf0pfPJsJSvOzdjr%2BwbQ9YmL33VW5cfK6c5S6%2FhwOY%2BmnquD5qz0i9cDTh1GwU0KXKAiQNcMFIEL4Futr3e3m71JER%2FrDnVbMFnA6DsXl9%2Bi9WqVsQK8NsqDiTu5GiVbObwtiGZvJ%2BKdoJzAw0%2FekDX4n7OwKyq4h1zvwTiSME8SqVX1K0ivt1CyQY8Z26AmY2tZCFwjWXCyaU%2Fm0o7V5VSud1o4OiqEE5qSc5jbzw6KYWs4ngxVUNxQ9v6FrqSStHKEzU%2F%2FUCTjafGd7%2FrBxHzCwrwVu1z3K3tVGvscQXnBf10S7PkL%2BWvwiREOHR9Gp6nq2mA%3D%3D',
        },
        {
          id: 1,
          title: '公益活動',
          text: '環境保育，用行動表示',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625204113983.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=miejGB5j%2BKLFfelTQidOf6ixMrJ5vy2gP2jD9ZqHCDwN3%2Fl7P63Zsf5YCOz3ZKI04JEt8FNRRU6V5Jxqq0E%2FKemN9F%2BsPZOL0CP4Lu9SGre4YR%2BX%2FxNW34bVtHsmvaemThVe8tn0xdIyq5BE7aX57eh1Jhw4Y5lcXHAWQuDTWKzQo%2BTSRy2tC47HqY0nOBP4o6L3%2B0fId2zwWbLN2sx8sOTRVBJrMzAUkkm2Cvml0TkQ6tZcWLqj1mqBHbWIG40URTcRfxO%2F%2BWKOw0Qgx9ArTqprJwBE4POURz6cNVScCOAesvCwQoyccMVYWJWgc%2FLt4MhjogV2ZRx7jOKH0DkhDA%3D%3D',
        },
        {
          id: 2,
          title: '講座',
          text: '透過語言，講述台灣之美',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625195317039.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dufzZJewoMd6bmO75NuDHx6NNVZpj3WHQKwdno8G3obxVWwQIXvuy6%2FNAil%2BRoNPf5%2Fc3z6TYdaaZU5GqWHVig21HkmZTJLgx76J3senU8g7lfI%2B0aRbOIJhxtvdIii04BnY3W6sKTZAdnmDmFPtxjqlempN4xDQBDMaORSa0E599OqaUm4pj60MxB%2Buet8rftfHuCb9tmlE4XU4oaNfjJCheQ28It%2FsgThz2AReuKp2bCxHtK3%2BbWwIlntiB0ofOB80EhKRFtuIpNr38j%2BPqNceuT7EUmXZpS0KawCR7QtzsolVgiQ0KPdaS8KtTrNGg2qZ1nFQquh%2FAuNE6AVpHA%3D%3D',
        },
        {
          id: 3,
          title: '有機商品',
          text: '當季蔬果，新鮮無農藥',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625195311517.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KHHNXNbc%2BSoLpOPAxKy4ywvQ9HiKOXmjxp%2FYnkix7GX7x3edi1C0E3QhTMCVnPxZXj3BjBNvI0w2fBvedxKe3hdmNlnuGKTkrZZhOjkqrPk0Z8CRv10QNMey5eIIsPHs6AAvNYNg2omTLVqqr5VvzU2p%2FVG51djRbmmb4dPdtTO9%2BGepS06U771jvlxzbZqOr9KJ0Q1kl8EjQgCT29219x%2B76UTyYlcc7XxGNoHpCsmK0xfbG7jFp2kPNm40IRgYDJA%2BGLmEmRh4zKW0KMasv%2F14vh0y8S1aPh%2FaAV6thXZHKml0C90r21yG%2FN4SdMyQMWzWuHMgKyGR1C7v99jD%2Bw%3D%3D',
        },
        {
          id: 4,
          title: '環保商品',
          text: '減塑行動，從你我開始',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625202999417.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BjHrZrY%2BFjumd7Rv%2BbkRYlIWkosvMv9oAnx8SQsSypjmQRfyhwi0DvsAey%2F3svyUVXfgIqEdnt7%2FDqVoInxFrUa1TuEVHh6aq%2FnDEK%2BuGRtVg3CiYWljmi6CCylnt0lemNHcB4alSBesS2utcZ6UV9gus8M7S3wglPa1X4fxAm2Iq8VTa9MCbbsu55HowJR6Vk2gmgEYfqCbaKGiiPj1lVJ0jKTCbKnILUwkI6IA%2B9AKQX3SJUkM4G%2B%2FCPFK8cpMaLqVXBzWcMFV1hNZizudopA8%2Byt88FoFqJzsCA6WaH%2FulbsMwYxivynU%2FtY16as2MJyHDe1UeMpHZG9ebxlbiQ%3D%3D',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
