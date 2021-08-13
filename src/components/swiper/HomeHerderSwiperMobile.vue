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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847542911.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bd%2BJPULXOLEDgWMG%2F1JralQUd4wyuVHFrUdXcpLWUIw2yap3Y2GP4OxUjctMq0EHldLZnGZ9LuiGNaK1A7wBVTmhoI8XZhgVYtpitsHmq%2BG7dTYg1JW7Tc9GkwI%2BbFr4Z9RJaPJ%2BbreXxB0j7jnbZy6J6Np7HEczzZSIrHIorJlUeIWH9He9BTeNuPtkVP18JdR7UboLK9ygmBi7f1VbXa90UrrwmpTAq9Ttelz4io0nH7NTtcfNdIGRacpyBv7LPSAKsN5NBHw%2FCsarqQjYDz4PclTg358jr5USJo%2Fmk4%2BWJkRkoJ3puiZYWzaT4fcSCjsI%2FwBiRhOKyO0WOc2Npg%3D%3D',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847549174.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DZ42xylMhcSO4AOvfsdWJQj9hZtnhwm%2BPGhEnhIrMTvnGnu5TrOQ%2B3x4by9qF2qucmx7FC%2FVcUL0G6GCGDOd2vmeFn1Ukw%2BpPGy9Crsk2b4cMvbzDcAsR9bLuj5%2F0LoMxVyLkU2MnoR5jUiHH%2BARSid9ThkCd%2BEPk4dUP2i4ivh%2BtuDG%2Fvzopl4O%2FVpCY5aOrWgRY4fWXobwW9h9eagmeuVkNDJbW8QkK7EOsDyWiI87G0nprDBwPhMK0eEUEyAFvNlP1uCQ9pI2VCsn9rdJ%2BElCPMumeyq8ECiqRfBhKGvmNt9wG%2BhiEe4sdVJoTg6WqsIIk7axB0HkUnvIDY%2Fx5g%3D%3D',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847553698.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UPgi5SYZ1kM8oEGI7Zql0qexWSJEW6BBaRduscwYu%2FXgADCwtoGvTf4qHd1VVFVM2cglcy7jBMMgHsIwHuDkJdeCv9WRSKUz7NVBjS6LYm428wVU5kdELqugitDxbr49ygZVegXfjLkjh5mVQtt%2Fisf5naC%2F2PpjPSOb23ENV0ecqGrgAhjgZ4BgMt9Z0x2JesBPHuvWFWVz%2Bb9wHPdeukp1AoF%2FOSODE5qWL0UTaB9k%2BNkPB54UC2JgMVgfuUMVCIwLzBG2cIaBd1h2rMI%2FD8RqhWTg5%2FEBDBK5h4rVuC04bZzUIcVeJDQf2rJZWFSMS2WS2Zj3xEoA7pKoQDomUg%3D%3D',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847557540.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jvl%2BBwAynP4SsPQTf%2FcUOjFSVjzEHirrj0jmIfKFrkvBs1%2BIKBNVEhEMKKARdzeYUmxgzynIVd7X%2BvanbBfxW3XAYT3xxRT0mf1N8cYCpa4IAQJ8yE2JiM9i9GbQkCbajDlwonwbJFFTuj00cHdA8Kw2ZiGvL%2FWpERwACvXn1LZlkacBG0hcLeBUcPxeR9vYmD2B9cJYcaZyS6UB2dClEfb7H6ouukfXg7hPL3tvtGqaxn4Qc3qBD9XKzNAJ4KPEDrXo3X8MHwZAvfKGUDqYLF%2FwTO4Qy9117OtAo9p0f3OzYON7E%2Bj8aeKi4pwtJ7wG08%2Bbk9tc2RHlyfx2cPHIqg%3D%3D',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847562214.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KO9a6tg8be9pTMKQNSPjzi18YzGN8Y3FbLwIww2i43hTpfZgbCjsH%2BgF7HxGL96saT42zEyefTgi5tbtpEgiTkQg100SsO2b62R03TIPIt%2FGy%2BAyNFcTxyYmCWwxW3ZCZtlHb87U1J%2FZq4isgsOmqqu1ovXe45b9QbxJRZbcBpN5tlqO4sUaUpciLj8cXj%2FgkmuAr7ccdVMU3M4uh%2BEUv%2FU5y2VP87lDUBJTifCfY3nLUsLjEroeNPo4FHCYZUK5PURoWwOnLgRYYhyPo3Wl6YH9CLK1Fo5Ka%2FryoQhQ2htxjoXK3UhJpiUtSjpzrt9BGQgy2L1EqDNLrl%2FA2zBrqA%3D%3D',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847573581.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DHDMO1Bh8vtCeHaSyjDOzoQARj26ChNoDgdbVme6D0xd3LKomNNOqP0Qt1akY3dcNG4dzKnrfwpx7BPst7h4cbOYfEX4Hgb%2B5MDalO0EaUAIordkBHmK5HW5WC37Y66o59d3z88tZTLIQOfv%2FRofj1O%2BYryOvnMA%2BRtR7F%2FXJrrtMpc6TC7xIZbPG6TegNeJleLc1ny%2FU2w4cUMBBM0BjXMWNmeFz%2FD%2BmzTUT7XqRn9bXD2j6TH4np70evkoCJNF0BZkhdG8UaQ%2BRJMFxrnFz6i1Gmiz68jzbWgu%2FAXp%2FPjDToWe9WQJmD1hlFvvd64L4oDKF02goI1dTBhmhNGvRw%3D%3D',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628847578374.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NKXFgbw8qmxCwfrgFaFNAZoX%2FAmfM3lS7Upu1X%2FkJNGJKKjMYTSTtsBn2res4XosUjju5g3Tnf%2BsV0ttvgK0QsWiyspGDWHsi%2FQtmQXEqqqWaAhbUKAKeLnr8Hz3aRurMOqqqFMjB3Jdbpz3cao%2FiDmFDTVf%2FHj6olCjU1RndXg5Q9FBf%2BR9NRz5EDVaO4oGsybB%2BHe8yFZ5XZI4bJsYixNQ4KCPuWk4G7wgtJN0BWd4V8G2Mww4suYwIWa3qrx9p1CRCR8xKriV4gOF9MknlmcrrPtWDpq1OJESCXYggFFuT2zN8GqmPOrRnmjAAB9GnvfqFWUDdqkFvPl1liM4mg%3D%3D',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
