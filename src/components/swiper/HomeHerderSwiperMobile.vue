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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628843977317.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FKVsahF5SEYrKzEoDLU3sAXN3IhzVgE7cTOiSvlAyhzF8CLTGBnQiqXYyT%2BIC1kOWUTOw3%2Bj%2BqAnITzVrHHsyg9NwBDWv8cmCmd7Z6bAz7SUkrcqMzp%2FDGBu3HV2S2OBI2PFIMvaSnm0mlXzqt83uJMGep0Py2Scmh4AgyznSvSIPCjYzO%2BeMbZW%2B5JoAP3tokyIMfp3dsJKtGtvSTtxjF18NRFwmJ2Fbl%2Bm1R55tAVkeFr2yQGxoww%2BSbw6tEeZtPbReJf7%2FDilCaVUDPobEtOkQ5k0YBVGss6wuF9RyuZK7TfW3oi8GLvMr7d0Mho%2B3CfJNQzV6lIU6Szs2b0eiQ%3D%3D',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628844453094.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VUMsMoSrAfIU7rEvzOTyU4BYh2B4LLVXqKP6vcOuDuv3FC%2F06%2BPrXIXcZTuM%2BKa0zopugupb0%2F6PGfo%2BBGDBW%2BXBm0VrLmBV4mA1B2Z7zcqvWf5Gadr4gUpbFnSP6o2SpYnFic9b7XtWMdyAu6OI2K2kWr0nliqMF8y2vVpM06lYKsy0hsngZ26kj%2FyUqJT30aN898fjDGsHSrrkW7hZI6b3wWgTh7kdO%2Bueo5ptTUEPdeZlPVcVL0ZSwEBXPeOYY%2B392h251kkYxVEJ4JgRVIDWL%2BokAXWNxZZ%2Fo7cCTh3R6hzz3fauXRY%2FU%2BvsDS6G0hOicgfmuI7N%2FHSsCpREXw%3D%3D',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628844871618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HlWrVZwhq1aG1tq%2FQrcj5tsaqxZeteiDHmQcFaA0JAJu0wCRMD6bwQqTEkEYkh%2BHpFPWJxPIulR%2BLOnBJe3n68oAUFrI7VpuDsYskSMU9TjZWapMGg4jMuJCiYfBBZDLVdWlz7Wxbw1szQR7pvJQe2AJ6DXX%2F%2BEGK5d8Vu9OplEaF%2BjCGfPylQzkdBh%2BeFfXJLxKLJ1IHiUdegffeviKw7IxYLnNnnevAhBDTeifjXN8awTDNutpbvrOizJkZEKGjd9cZ7r2onfAQ14TxZnv6FEJn1I4Wdmvo5PuPOms%2B3T6GaDW7haR5GYjHJvbz1z1wvVjSN7OCURyXl9pzoWOrQ%3D%3D',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845014250.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mVMUF%2FS7aUNxvmGynflos97dyERRj8g8POUSWqIEZiAL5yNd7jHlSvyXtP9LYfYG7BQ6nJcg9zVMcu2J90geVOs0GRuR5Ty%2BpWa9Q8h7aJIk2EBEXLDe03lMjFVDbVmElOlFNc83WltHbKUIY1MyWwU93PU8EQMQzmWJbteDNhhru3pxdwBdAMF0RP2wtW1GDugcul3egkzB9UP44hTJNtpuIJcwxFfbrbG38BoDo0f%2F%2BS1mh3XnCgmvRZ2%2BIy1rgivacP1JzSFlfXXxeCOL0xDph5IFJs3jx1BjahvGB2SvGtOsdI%2BlEfAiwCn4PyV6S5f%2FBJnqAoPa2r%2BI68NveA%3D%3D',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845168434.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XDv2CSYwcyw1%2FxjKckxVBuJlSYwbuv3j51fIItBnuf3KL%2FGDl2AYxuWWeeWAF9qP3Cw3Oesi87hVpTPzvj5wILRKwrQKe6dTQE1p1JKVT%2FNRQD7Kl5Ai4Nx%2FQDW%2FmyOrIjpanNyVgVNB7tR%2B5aXHoBhwvRWjt1Wyi8yTscae%2FGukXEworpDRPTcCXhH9Ad6zN9VudCdBIQ%2BYQM%2BWua12yTWSpw86bSt6rBxdV4mhjryuBCCFeLKzj14u9AxAMuqYdy5OtPuLwZC%2BQ6oojnyS7abzZbEs9del7qR5h7I2pda0gfdTfjRGrx%2B9jyQgkwxivdtvVwa6U0IjFvlgAr2MdA%3D%3D',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845273135.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VECG%2BP88pvQStgIcsYh%2B3wMgJxuzLcgi5ni7rck3w0qVeQKVT2SDg7emQbDDLvljLWov9elfi6yS6cj5uKcFiJDhNm%2FtSPnkI%2BRX%2BF%2FcAMNLJIiWvB8nr9yzPKXMS8G0sB9B1kRrt%2BFT0FgwA%2BhlcDzTzio%2BuqbZKGQXz7dA%2B2i2haRhMca8MBAb%2BNrU6ZgxVAZEG0OoxAWzGqBNmrKOLGaL8HnA0EbYtHt6YOAxabi%2FSOQv%2FyN4BFpWHqs97j40UJrQGpS48mPrrC4fsDJqsjI8Fm3nY0LvBlqCvSn8YaUKFOyjUN%2FNMQ9labCTQNhI%2FpvBHI3nFzB1lT6c7QGy5Q%3D%3D',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845377170.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Hr2xZ%2BqSS7Az41oiErXBn1wwVE47JGUR5G2SE3IIy7fWyNUdOfLgCOhw3fBTwlU3mE8jPkByv7PJMyie1GRO3fQ16z4%2BeUJZzkdT%2FSEqgM7hcHFYswj6EJym1cAsWXnvccoOD6lsQSOUo%2F32eGGA%2FXfh5bQWctJDzw77urESiALYkWoWILAsWWYYBdb9Zm2lQRHuNnJ7Z5R2Citag6siCIi2po2F%2FOvf2TtQjMyhJ2sR0Rtrp7Czt1rk27XZm56U2HX6TirIfKquP%2B2A%2F2JS2nRkHvJQSg5xCmVjCmRm1s707taId6bd6pymQY6IGC4yUn6VMG2QfDC8vYrN%2BwHS7w%3D%3D',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
