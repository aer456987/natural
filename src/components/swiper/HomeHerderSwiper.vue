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
    class="mySwiper"
  >
    <template
      v-for="headerImg in headerImgs"
      :key="headerImg.id"
    >
      <swiper-slide class="">
        <img
        :src="headerImg.img"
        :alt="`首圖_${headerImg.id}`"
        class="w-100"
      >
      </swiper-slide>
    </template>
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
      headerImgs: [
        {
          id: 0,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211537975.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VlT5CbDBZusn0%2BQ5GbWo6v%2B98G4FqaiUDZ9Bc6hBbVo2zkJiD1gOHRMobVLbZJeLE4phWE3YdQa4%2BQxhOPJNuwxsJxl986vMrQRfTeR310l9uvFqbYEEt6UPVGKGN7s7NhB0D%2BxjMKVFXPYfNuogTb5fdbD%2FyFa3tCDRQod6LhXvFna9iiYmsfwIAvEnfxGCyb0v5k3MYyexowtAC%2FNfVVUeMJPQXe7CN%2F%2BpJ%2FDlGaTmpgkYwj1B%2BMjmKMc1%2BISXLfloJ3WU9uWbZLfgv6tYH7cGZ67FUYh3wtAXqo03zae62c30oOm2GBZaroV1s24iIrY4JlN0scQHlgeDmyRUJg%3D%3D',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211547457.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=I13xPk%2BEiOzSNfqdzcVfjI31Z9vLfhm4oDnfn2eV1xQdkzBZXW7Zik27rJVVcP%2B%2B1cIw38f1v8xYulZ%2B%2FihXu%2FWlfw31tJDaSXNuiStJoxHKOSJK8z2FGad2PK4V%2FxP8Y2DRcBhFrNiSE6Kzm2NAwniGP7c2eCpACy%2FGc%2F%2BPN9acc%2FeKtzqJPJ%2FTi6nAvSfHQmEKQdmgRvEV%2BcMtUTwbrn9T5Nn86WKvzoLd3K2byU1HZLJviXOxG3goWjZUezIb4VSzJvNIMDIeSl%2BtUdS7zAFhRwvc6ZSHkDAclZuwxDVHLKX7z7NwRQDd5GJfRa4n3lcYf8AG3T8kAKH9TLMH2A%3D%3D',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211571861.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RbXG5SWlzC5idadqGaAa1I7sCRfumaGSPkqh5FtIU7JVw7K6bTCT%2B8fF5pCap9ElYJ7jSZo%2BvJWGrwOIqiHuGexDTr80doUvzY5I0TdVYKVSBfA8Cr9yPcpVJXFRDn9oZJwC4hnXnyjXmsYF%2BgRIz2JRqUToOAWbEXLn8FyBZ9bB7pQGK3Nf2YfsMH6BVTZlBevFqL7x6lwpIsijMPZXvQpumraNBHMZcPnplOlkaqX847e41lpkUMP9JOc2Se8PlBUK%2B6D9XtFKB0a4JuxO3hJf8RxknWDhZdmjd%2FNyYbFgW7p0mW2kEit3kVbSDJNRATqx%2BRkoun5aFvS5SDVmxQ%3D%3D',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211555798.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lF%2BaSl5x5jAmN2ZaHYHRhK54Pw7GrsG4KoIzPbHhQwJfhfetzrxx4%2BT6SXkxjY5cew68VULHLzfmeRrBlULNjcGLR6JZwyWNU7n%2B5mliyDPg0kA0wG0y99CoWSkDUpcWpdhEVt0A12zSCGhSD6eOqaIpa8tgHrh%2B1Lk5nI4mq8SN%2BNKY6aCWOCLqqC6lwQ1D%2Bgtzgwsa2OOw3b%2Fg1pZ5gKL06NWpsRtBSn0dbYlG9qY%2BmS9Q6HMp2AmS5VIeWlR2F0A3JKsZoGSmdRsKTLj%2B5sG%2BkJ%2FUk5scOS6bSo29sK3n%2Btp%2BnhPxkgjfS40KertN%2F9c5E0oGoF3HRhXsyA2Wiw%3D%3D',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211591347.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qhfVHht%2FT%2BBDrdymEw5tfRTdJ1GYx%2FWahoVsXeXEuBlZts%2FXjLG7IFlPuhRXbpc2ZG56BBQLK0dqONL7g8uz6ER297HuGQtOFhtGvaP6eylBEWxVIg%2Bmi2PJVz755tNXcMSBJBEkDmZ2nV2vsiCSMuZA%2FjEO2xSZ3OIOZ2JvPdq2P3Ud2%2Bna4x8yK9XFsVXN%2Fro9dcflVRh1Uy%2BoTWEQ8HhkBV%2BgKh%2FP0DFXO1C150o1GfQTo1hs8dvMsTEa2zEvmfiAiirD%2FgHWaMjuvq37ICc0Ftao44cgcqNLSaxH0Ll2vRIcGwRb%2Bt3piCLNhPzAciUxBUuuaJjF0dZw1mcwcA%3D%3D',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211607207.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UB1UO0d52OmexAekI4UhINU1wNuEDvsTAC8zJERWbwRcpDfgGPhqdwlw0WVdlk7TxGqrM%2Bw5wG119TCCJ6DGF26EJ%2B9rwIjlQiBMi3DQf44fOjvvaiPvJ6R9oqEnpJvavtaUV1PGcg9dFHgtoSPHR9My4uGFgM46F0dgW6xIUOFjbBI%2BXNTUE81V24bpLORJ8ibN9%2B8ILxZ4r1ul0cAHlPtxiXO1VrHGuKGoCeUJJZbHjTq85NAUagQCIQdfgMnyh4RSY3ocEM%2FexmCw8VI4NrKnGhYG%2F7ab19AuUOV445PkLjvKIrYYWO%2BICBprPMoxNAbxtXYYCdR3GM%2FSi4u2EA%3D%3D',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625211563788.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nsWW3Woml%2F2DG3udCFGrJzCdlDqWRO7%2BE0ll610aRjD7UNBD%2BFFpbgX9jtsBkQ0Ovq%2FcqstndHKp5jZKtwlOyje%2BEyf3g2KJdUxEri69%2BL1IliONpyXKbVt2LNNgFcssCfbecZPlZ%2Fr963m5%2FtsmP8ND%2FdtENVOsHtmwpEWVgfzmdKlNsv9MyGWugizMb97ZwU9t4DFIFMACVijlX6gWthXEeoUHYWf6NeWLjtAkgiyj4jRqvpxcgQh3YfvpS2ztmMHhDCIVH8RUnLdRC3h5MMGDgzxwb4XnTPvo%2BmB7I6G7tFbSPtiHtBoagEu9ckEm1Bdt71rFuKLAzYPCe2IXcQ%3D%3D',
        },
      ],
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
