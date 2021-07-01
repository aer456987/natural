<template>
  <HomeNavBar></HomeNavBar>
  <!-- <swiper
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
  </swiper> -->
  <HerderSwiper></HerderSwiper>

  <main class="bg-white">
    <!-- 圖片 -->
    <section class="container py-6">
      <h1 class="h2 fw-bold text-center mb-4">自然，不該被視作理所當然。</h1>
      <NaturalThreatCard></NaturalThreatCard>
    </section>

    <!-- 介紹 -->
    <section class="py-6 text-center bg-gray-100">
      <h2 class="fw-bold mb-3">這一秒，大自然的生命也在逐漸凋零</h2>
      <div class="row flex-column align-items-center">
        <span class="ㄏ col-md-7 col-lg-5">
          <p>
            環境議題一直都是不斷被提起，卻又容易被忽視的問題，
            一般大眾如果沒有無刻意關注，很常會錯過這些環保活動。
          </p>
          <strong>而這正是 Natural 平台成立的目的。</strong>
          <p class="pt-2 pb-3">
            Natural 平台整合了各項環保活動、募款專案，另外也收錄了多家優良廠商推出的有機食品，
            讓民眾能夠快速一覽相關的環境保育資訊、有機商品，並透過 Natural 平台進行快速預約或購買。
          </p>
        </span>
        <span class="col-10 col-sm-3 col-lg-2">
          <button class="btn btn-primary py-1 w-100">
            來去看看
          </button>
        </span>
      </div>
    </section>

    <!-- 數字 -->
    <section class="container py-6">
      <div class="d-flex justify-content-between">

        <template
          v-for="platform in platformData"
          :key="platform.id"
        >
          <span class="text-center">
            <h3 class="fs-7 fw-bold">
              <CountTo
                :end-val="platform.num"
                :count-to-id="platform.id"
              ></CountTo>
              <span class="fs-4">/{{ platform.unit }}</span>
            </h3>
            <p class="m-0">{{ platform.text }}</p>
          </span>
        </template>
      </div>
    </section>

    <!-- 商品分類 -->
    <section class="row justify-content-around align-items-center pb-6">
      <div class="col-1 p-0 border">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624884156668.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NrGuO43IAppa26zHt323ZupJOVq6rVUtzymBY2sP0RNsNawEOMUmfk%2BGtkZPkJmMuIvD50ttGauJ4esgjKDbXwMhzzB6GsVhv94ge6qgBgBSGTuoyYoB%2F5P33dVsqWGBAlfPrDKuxqLLlKp4yweu3aAIPtXs%2BD2iz9rWvApMJi8ahBLvUu4JrDyazE2%2F299w4%2BfJnArNAt2F%2FyXFQvwGx%2BtaTpowUoSdjjwtx9e4uL%2FbMpWJqPgHx0DHgyFwqxJVdUnHWZL8%2FxmT12S3uBDCpy9b%2FiRRwLUhassVhMiY46g0glkFstFRggBXB4z1H2XxyLCJtY4yeTX8qkcLBrO69g%3D%3D"
          alt="介紹圖片_01"
          class="w-100"
        >
      </div>
      <div class="col-2 p-0 border">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624868869655.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=K5zw5aL9sbE2u%2FRxqRx0uulvsJZ4wjuF%2BwyVyrQ8EnnU3aEfhRzvy72RVj3kmcdCvt4tI6LvO0JawLv5QERPHRKyVe9ADIHE1DkUvF0Gnap3XoL0XnhxIwH%2FI9Qn9Hn7Be6dkNceR8Rg8Ug5HmeEoX%2BT1ghZy5SQZMoBNv4v0p0OTpUp0EQHWpxquEGwDewBwTX08PlLlBYxtW5yMJuc26dDFxyoPAd6U4y6CEJZ89svh7x6uK%2BhCTkicJRi9S6qjPtl4Btgm%2Faq1jFy31gehkJQn1UX7eheUGkp8ZWXLLJHK3VtgoI8rorCWhYlcWVZZfa0cztZoPCB4kzCaQnxzA%3D%3D"
          alt="介紹圖片_01"
          class="w-100"
        >
      </div>
      <div class="col-3 p-0 border">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624872039637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bdpK7FIATrJpeNeHxkM52DN9pxMfHmC2nwUECqgtJoKYKfyf%2FyXmhgHCVpcYyTF9DxPTsvQokVSP58vkHOsxvD3aP37d%2FiXyKZDxlfJDH8dKH5aQbJuDcX1jkVJf9%2FxY0CClLMByX6pWhwZp%2FA7Hklne8m%2BOsNtmexJOe14tymtAWwpmvSTqq7rkmCva4A0FMmS0fuSGG5CasWVIzNxhyc9I7Pqi6Vk3kvPl0xjU2biNFmMfkpgSpkbTdnB4lvBvOn0v3r0kslHgm%2BDpdwqBvSIRRG%2F8bm5WyJsPf8h2v0tMwwQ9%2Bol%2BeB9QhWiNCp8rvszh56FF%2BzwegVN8wVYNXQ%3D%3D"
          alt="介紹圖片_01"
          class="w-100"
        >
      </div>
      <div class="col-2 p-0 border">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624874669112.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Qr%2Bp5QnLvcrPn%2BaQSXoFp%2Be8FxZz8h6SmaTVX%2FDwtx9jAeumbejUBp%2BblBkvCnFXlrkHs%2BUZzIHZrXnbktekMZOU5ybKk9g%2FPb3sdGBT7c5yGquT7vGHCIjkqTD3IyXsi2NVDvGWIDFgLE1b62L7OxWBbW2lJzIFcqYiiNlYjOO%2FlYsnwy982U8uOI2XDYFWjgqFrzWD5Lh%2FHlOUCSnK8xmIPO0Bygcqdji7rXYfjKF2PRPNXaL4bX5GZMnnTrIntFJcZDQiENdmLqK1Tw0XUhLYz6ZCQPqFEQyj7AydfmqCo5Sv%2FT%2B3t64fXH4zcGJgWhxO7%2FDfoATs8858SC5MgA%3D%3D"
          alt="介紹圖片_01"
          class="w-100"
        >
      </div>
      <div class="col-1 p-0 border">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624869388185.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g09I3GiUXLw0b2tbYjtthB2ckEu0V%2BRaLcHs8x0eUAOIalfsvzYl5N5qjOc%2B8rG%2F5Bd98q1D4jepADJQFUw%2B4renGRVsem2Ucgsu%2FjUOI%2BpBftUJxpRbrrkEHxsdTEIH%2F5BwlZDhWGcBzhakmd27o5ODYwnuRwJ3n6oUefERBqhjoIcM3dwrPcjKERiD2wpMuz%2FtL9H4d4KFbXZscC1kxaCWHP8AW6xmLbpAB8EcTfjiGRfD%2BPlFmoSyq%2FDQghAfTwq33K%2FQDm9t523Igt%2BsBPziGlRMzXX70QOPH%2BQV8uL91ps1i9udz%2B%2FbhJpS4iXv8Co%2BeXDSEWjB%2BHgaUQJ6Kw%3D%3D"
          alt="介紹圖片_01"
          class="w-100"
        >
      </div>
    </section>

    <!-- 資訊 -->
    <section class="container py-6">
      <div class="row align-items-center">
        <div class="col-md-6 p-0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624884156668.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NrGuO43IAppa26zHt323ZupJOVq6rVUtzymBY2sP0RNsNawEOMUmfk%2BGtkZPkJmMuIvD50ttGauJ4esgjKDbXwMhzzB6GsVhv94ge6qgBgBSGTuoyYoB%2F5P33dVsqWGBAlfPrDKuxqLLlKp4yweu3aAIPtXs%2BD2iz9rWvApMJi8ahBLvUu4JrDyazE2%2F299w4%2BfJnArNAt2F%2FyXFQvwGx%2BtaTpowUoSdjjwtx9e4uL%2FbMpWJqPgHx0DHgyFwqxJVdUnHWZL8%2FxmT12S3uBDCpy9b%2FiRRwLUhassVhMiY46g0glkFstFRggBXB4z1H2XxyLCJtY4yeTX8qkcLBrO69g%3D%3D"
            alt="介紹圖片_01"
            class="w-100"
          >
        </div>

        <div class="col-md-6">
          <div class="row flex-column align-items-center">
            <span class="col-10 col-md-8 p-0 pb-4">
              <h3 class="h2 fw-bold">活動資訊豐富</h3>
            </span>

            <span class="col-10 col-md-8 p-0 pb-2">
              <p>
                不定時發布各縣市政府、企業以及民間團體所舉辦的環境保
                育活動、教育講座、募款資訊，更新速度快，活動資訊清晰。
              </p>
              <p>
                目前已舉辦過包含淨灘、淨山、淨溪、植樹等 2500 場公益活
                動， 2000 場關於台灣環境保育、野生動物保育的講座，所有
                活動的收益扣除成本後皆全數捐給相關環保團體。
              </p>
            </span>

            <span class="col-10 col-md-8 p-0 text-end">
              <button class="btn btn-outline-primary py-1 px-5">
                了解更多
              </button>
            </span>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row flex-column align-items-center text-end">
            <span class="col-10 col-md-8 p-0 pb-4">
              <h3 class="h2 fw-bold">民眾參加度踴躍</h3>
            </span>

            <span class="col-10 col-md-8 p-0 pb-2">
              <p>
                Natural 平台成立至今，每天都有近 500 人透過平台預約環
                境保育活動、參與募資或是購買有機商品。
              </p>
              <p>
                每場環保活動、教育演講幾乎場場額滿，不限參加者年齡，
                透過 Natural 平台的購買機制，大人、小孩皆可輕鬆使用。
              </p>
            </span>

            <span class="col-10 col-md-8 p-0 text-end">
              <button class="btn btn-outline-primary py-1 px-5">
                我想參加
              </button>
            </span>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624884156668.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NrGuO43IAppa26zHt323ZupJOVq6rVUtzymBY2sP0RNsNawEOMUmfk%2BGtkZPkJmMuIvD50ttGauJ4esgjKDbXwMhzzB6GsVhv94ge6qgBgBSGTuoyYoB%2F5P33dVsqWGBAlfPrDKuxqLLlKp4yweu3aAIPtXs%2BD2iz9rWvApMJi8ahBLvUu4JrDyazE2%2F299w4%2BfJnArNAt2F%2FyXFQvwGx%2BtaTpowUoSdjjwtx9e4uL%2FbMpWJqPgHx0DHgyFwqxJVdUnHWZL8%2FxmT12S3uBDCpy9b%2FiRRwLUhassVhMiY46g0glkFstFRggBXB4z1H2XxyLCJtY4yeTX8qkcLBrO69g%3D%3D"
            alt="介紹圖片_01"
            class="w-100"
          >
        </div>

        <div class="col-md-6 p-0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624884156668.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NrGuO43IAppa26zHt323ZupJOVq6rVUtzymBY2sP0RNsNawEOMUmfk%2BGtkZPkJmMuIvD50ttGauJ4esgjKDbXwMhzzB6GsVhv94ge6qgBgBSGTuoyYoB%2F5P33dVsqWGBAlfPrDKuxqLLlKp4yweu3aAIPtXs%2BD2iz9rWvApMJi8ahBLvUu4JrDyazE2%2F299w4%2BfJnArNAt2F%2FyXFQvwGx%2BtaTpowUoSdjjwtx9e4uL%2FbMpWJqPgHx0DHgyFwqxJVdUnHWZL8%2FxmT12S3uBDCpy9b%2FiRRwLUhassVhMiY46g0glkFstFRggBXB4z1H2XxyLCJtY4yeTX8qkcLBrO69g%3D%3D"
            alt="介紹圖片_01"
            class="w-100"
          >
        </div>
        <div class="col-md-6">
          <div class="row flex-column align-items-center">
            <span class="col-10 col-md-8 p-0 pb-4">
              <h3 class="h2 fw-bold">產品種類多樣</h3>
            </span>

            <span class="col-10 col-md-8 p-0 pb-2">
              <p>
                Natural 平台現有 310 家合作的有機農家、廠商，所有的合作
                商家皆有獲得政府認證之有機食品標章。
              </p>
              <p>
                依照季節的不同推出不同的蔬果組合，使用者可以隨時透過
                Natural 平台平台購買到當季最新鮮的蔬菜、水果。
              </p>
              <p>
                另外 Natural 平台也有販售線下主打的環保用品，因應政府
                減塑政策，為環境盡一份心力。
              </p>
            </span>

            <span class="col-10 col-md-8 p-0 text-end">
              <button class="btn btn-outline-primary py-1 px-5">
                前往採購
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 訂閱 -->
    <section class="py-5 text-center bg-gray-100">
      <p class="fs-4 mb-3">訂閱 Natural 平台，讓您絕不漏接任何一則最新資訊！</p>
      <div class="row justify-content-center">
        <div class="col-10 col-md-7 col-lg-6 col-xl-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-1 px-2"
              placeholder="請留下您的Email，由我們主動通知您！"
              aria-label="請留下您的Email，由我們主動通知您！">
            <button
              class="btn btn_main py-1 px-2"
              type="button"
            >
            我要訂閱
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer></Footer>
</template>

<script>
import HomeNavBar from '@/components/HomeNavBar.vue';
import Footer from '@/components/Footer.vue';
import HerderSwiper from '@/components/HomeHerderSwiper.vue';
import NaturalThreatCard from '@/components/HomeNaturalThreatCard.vue';
import CountTo from '@/components/count-to';

export default {
  name: 'Home',
  data() {
    return {
      platformData: [
        {
          id: 'year',
          num: 5,
          unit: '年',
          text: '平台成立',
        },
        {
          id: 'user',
          num: 20000,
          unit: '人',
          text: '每月使用者',
        },
        {
          id: 'activity',
          num: 4500,
          unit: '場',
          text: '公益活動',
        },
        {
          id: 'cooperative',
          num: 310,
          unit: '家',
          text: '合作廠商',
        },
      ],
    };
  },
  components: {
    HomeNavBar,
    Footer,
    HerderSwiper,
    NaturalThreatCard,
    CountTo,
  },
  methods: {},
  mounted() {},
};
</script>
