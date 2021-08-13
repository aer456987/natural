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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845839603.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kuqK4hqtUn5SZcX32qafYnKh9BHsqkYhnYb8Yr4azPmjbrIZy%2B9O6vVF79EU5Cdh%2Bu%2FpOGrVgf0ydD2BPFEKtkSEvtXiZlVgHB9R4hkQIlef0jpXqNen%2Bw3tseprN%2Fcj%2F9BeW6yB1FwlclZl4UTdC8g0fB0G7GEvmdJFzNPtl%2Bt2wUQYMj15mXDizguMOexnu22mAyJZ3XUJlvEDr5zTKSDk%2BGG0qnZP%2Fg6LcwSR9fAnm4yDdJU9L2ZhncS8jQ80V2VS%2FsbeumPFSZhz7VytZHjjuU1I72aaIAGPZPw0fY8vbML6NR4ODBxfkU6NkcFFfK8Rx%2BYL3IH0W5tcIquAmg%3D%3D',
        },
        {
          id: 1,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845849808.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=G71CisBwcjcTT85kM2Yco15icBH35KvJd633iBNl4kSdnDl%2FikFa5uPxpJayzB07fir%2Fba6N7kwENfrAHURC7slHgHTDz4lhrGfwBCGfWyiyq4zdE%2BIS4p8Ha4TTCb02YG9fyRgv1A%2F2d4mTNWWALe%2BciX7xErN0ZQTyNYGbVDAyV8FGUna2VwQaK9vi%2FT2UHgHmZ%2Fe%2Bcx5fFc0ajHclNQnBm8Apn7Zht8n14bH3mPHdOnNiHYm7N34QqQmM%2FQewTI0hcCffI12cdYOgUlWLWupJgqPaiVqDENTRLW3t3U0nhwJ8ORBI3%2BNzF%2B%2F96BQuiby8OgiOfZmajacGCs2vHw%3D%3D',
        },
        {
          id: 2,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845856823.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Od34fcw6BvDNNVofbFQMnObSOuuTBbUugzEdIEIkQiQSVNZ73axpBEJgzj5qcUZKt%2FXKDdX8ET0RWO2NsycgQdW7sUYJ71MWgInioJT%2FT80lT9UVgyvEgb14BXiw7B6TFga2k8UJXlzI4in130ngDddrdmG1QgSsN%2F%2Bf9sNsctiTSf6z0tmpEY64pBlnWuQtbaLNUUJN6eCB7pMTYyu3u2kAT7zdyZ5jJN0R7lncu1l66NxTl6X51dkB2pbJPJOMlnjk25Yx64ej%2FKXDiGvjV%2BFBzN9D0VR5SlhGp%2FcVjokMVfX8Iv3lTQfJGarozMYF1CZOblzSdfXwxz2h9KtoUQ%3D%3D',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845862968.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DKFopzmJT50Go4lKzgTNHTjgq5D4hUgx7Ic6J6mFUwgmNgnVaVYRFDP2PuoJFf6OoqjFdorK7PfFcVkc8RvHTiWx9p8a1Lw19jBpyC3ifoUuA2aSsRbo%2B5GnfaAYlVYYmMTn3bIN92FoqRtyE9oSOz%2FAd9fH0jrLM9q4ncF9P5ISH9lVwJxrMY9IARuRuBhhhtPCm1B9TYlCMchcacxakuZWAbkAgbk8zE1pK5Eox6dIgIg9j7ER2LLt2foS9JKxMXjlqRGGwiwk94w4JgYNiwdMMbQN4%2BDeqPwoL7z%2FnO836hfOYMoep9f3pLUILrteyZZUXdCBgvbvAMoszsMqOg%3D%3D',
        },
        {
          id: 4,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845877329.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R%2FT%2B64OP57jNJgQjsKNfp63kfXgIuQOLVZCx7Tm%2FztPm7dWTS%2FBUKqbXgLTKXgkm0aebC%2Fn06oVAsk4J6XovoluqQQJpy5axBYRPTVM4DqECS%2BnjLqtaXRl3bqmzzMoyXSkcoCqpjae%2B9VbJbozAsxqYlY9CPsm9Mb2wHRVzExwhWPkizTrhI0wrqpJuSFQ8FkAKLnT0xj3EEESG%2B0kk3GOwZBQHoaG%2BHhnzazKUwTy3PlAod53CjdiniIt2sfkqGvWnLp1pUoSR9A8EJIl2rdTPoqkuzgldmD6uCNhDTIgtymzPnisF%2BobCdSTIAmWzEGpcfU%2Fml%2FaSAS17RJ%2BYQg%3D%3D',
        },
        {
          id: 5,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845887531.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jSvZro1itzAyHPBBvwyR%2BaJAeCm%2BtWa6UfEBLxQDDvJ7sz48%2BjTCPVzE1FjLIRSoxr%2BAKD60NTMWnUUV0RhyGvRU3qquyj6exubd3gdod1O9sXcMrLEodG7xmRJ9Op3cHa73trI%2B1hfTQp5b5Wp%2FDLOnIKbFL3VTf%2BQcNMFhrGmy%2Fa4zG6r01KaiPUeuekRzE0KyC8oNsmd3wZOx8YX8KIgXerL2J0FdtPCLZxSQgqvLpwj0GhhPP4RL6bpFv6LDgkEFE6x0OnahlSam1vn3%2BiuRc2vHQKGQlMMsjnSjLfeRLsYNTtOBKFmj%2BPvbrlhMyC8eqJrXp2tjycykiaafcA%3D%3D',
        },
        {
          id: 6,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1628845895196.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c0fy%2FZaQZYtQ9fgIZbMTsdZGfnmO553WOuanOHPSWcZIPWlqg9D%2FgSnGgwU9fq%2BbtCSrcJCSu60A6VsuNVUWFYRin4dmHBZJfAVnysQRPNa%2F9cwhH7bKW%2Feey8ykHQcagePmOWmzGVXStSyNXIlihCKHPH%2FcVuyfl8lnDns2y7YNh6eNrC7OwIjlcVTsU2aYz8UCp3gqXdpBQ4wce39o%2BWA%2FgLROZX2EFm%2FtvXgX%2FGyCp37HFa96tLoo24YPdXvcryQezz789ooNhwyYytl2U7iLkdX57qyAGmX1xBlxai0IQ2JX1IrTsCF0JicJkIV%2BicWodIslwtBP5khDhM82fQ%3D%3D',
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>
