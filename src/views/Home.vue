<template>
  <HomeNavBar
    class="transition-duration_1"
    :class="navbarClass"
  ></HomeNavBar>

  <header class="position-relative">
    <h1 class="position-absolute top-50 start-50 translate-middle
      z-index-2 text-center fw-bold text-light text-shadow"
    >
      <p class="h3 mb-3">
        有個聲音正在向你求救，<br>
        但你卻看不到它們。
      </p>
      你，<br>
      聽見它們的聲音了嗎？
    </h1>
    <Arrow class="arrow_style z-index-2"
    ></Arrow>
    <HerderSwiper></HerderSwiper>
  </header>
  <div id="main"></div>

  <main class="bg-white">
    <!-- 圖片 -->
      <div class="container py-6">
        <h1 class="h2 fw-bold text-center mb-1">自然，不該被視作理所當然。</h1>
        <p class="text-center mb-5">它們不會說話，卻默默承受著我們造成的業果。</p>
        <NaturalThreatCard></NaturalThreatCard>
      </div>

    <!-- 介紹 -->
    <section class="py-6 text-center bg-gray-100">
      <h2 class="fw-bold mb-3 px-2">
        這一秒，大自然的生命也在逐漸凋零
      </h2>
      <div class="row flex-column align-items-center pt-3">
        <span class="col-10 col-md-7 col-lg-5">
          <p>
            環境議題一直都是不斷被提起，卻又容易被忽視的問題，
            一般大眾如果沒有無刻意關注，很常會錯過這些環保活動。
          </p>
          <strong>而這正是 Natural 平台成立的目的。</strong>
          <p class="pt-2 pb-2">
            Natural 平台整合了各項環保活動、募款專案，另外也收錄了多家優良廠商推出的有機食品，
            讓民眾能夠快速一覽相關的環境保育資訊、有機商品，並透過 Natural 平台進行快速預約或購買。
          </p>
        </span>
        <div class="col-10 col-sm-4 col-lg-3 col-xl-3 col-xxl-2">
          <router-link to="/products">
            <HomeButton buttom-text="來去看看有些什麼"></HomeButton>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 數字 -->
    <section class="container py-6">
      <div class="d-flex justify-content-around">

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
    <section class="pb-6">
      <ProductSwiper class="py-2"></ProductSwiper>
    </section>

    <!-- 資訊 -->
    <section class="container py-6">
      <div class="row align-items-center">

        <div class="col-md-6 p-0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625143011345.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U9wi1nt158KKq8UGJXGtT6eyWLIlPvUmWtDuBbEB9IvFSpVYqDCcf%2FNe6BS%2F234VL%2Bv0bkXTikcfncnPPbVYIgI9vezAvYuyyZ4f27CVNEtDrDHNTK4Un3IqiVLgiBwVjlUaUFMLC%2F%2BtWU4oH4%2F5Up1D6BUAELMkZAOfKd3m1e3%2FcW%2F31mH4TgWB6umTUS4NPG6O5d6yH4pc98d%2Bxb%2BR665Qbfsa7yPUL1AYNJG03TpERJVOsoyS4pL%2BPFWU5WNc1jy6QnPPaJWNd1HoPRR4NZzyi%2FkNqnoDJBU49vLNWYB%2F8cTsf1YtANHYtNrjNesgT65VeeHRHXKRQY1S4ky%2B6w%3D%3D"
            alt="介紹圖片_01"
            class="w-100 rounded-1 shadow"
          >
        </div>

        <div class="col-md-6">
          <div class="row flex-column align-items-center py-3">
            <span class="col-10 col-md-9 p-0 pb-1">
              <h3 class="fw-bold mt-1 mb-2">活動資訊豐富</h3>
              <p>
                不定時發布各縣市政府、企業以及民間團體所舉辦的環境保
                育活動、教育講座、募款資訊，更新速度快，活動資訊清晰。
              </p>
              <p>
                目前已舉辦過包含淨灘、淨山、淨溪、植樹等 2500 場公益活
                動， 2000 場關於台灣環境保育、野生動物保育的講座。
              </p>
            </span>

            <span class="col-10 col-md-4 p-0 my-1">
              <router-link to="/products">
                <HomeButton buttom-text="了解更多"></HomeButton>
              </router-link>
            </span>
          </div>
        </div>

        <div class="col-md-6 p-0 d-md-none">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625140781955.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WHgXTmo8B4Rr3Abc9IweXvoHAKD3XvcbYz2%2FOxfIUAB1upfJT3ZzBg%2BsTMuW8kmrue%2BG08KH9Qg7%2FfqoRPfES9d4zj07wHw%2BB6ftngiA4ay1jkBTsBoFCvNB41JRgEZVR%2FBliSPVmhE6h7Bu%2BijnFf2Rvg5NuEZ5ZjJoKujpItnBYHg2bLNRu%2B7tl1qD%2FK%2F6JAXk4fHYKmih3Aa1vWQikl3pVe1EF3ndqpxeI8NPELiBbVZhpXor3zJbwPcbrLTsIGJTecZo3i1S7MiLCyPVG0wrbIc4ojBgtIxDEnYwoYijqh08Gg39i%2F5Z%2FdcE6zP0p%2B7%2BgetxU4NmfZeQW4caTg%3D%3D"
            alt="介紹圖片_02"
            class="w-100 rounded-1 shadow"
          >
        </div>

        <div class="col-md-6">
          <div class="row flex-column align-items-center py-3 text-end">
            <span class="col-10 col-md-9 p-0 pb-1">
              <h3 class="fw-bold mt-1 mb-2">民眾參加度踴躍</h3>
              <p>
                Natural 平台成立至今，每天都有近 500
                人透過平台預約環境保育活動、參與募資或是購買有機商品。
              </p>
              <p>
                每場環保活動、教育演講幾乎場場額滿，不限參加者年齡，
                透過 Natural 平台的購買機制，大人、小孩皆可輕鬆使用。
              </p>
            </span>

            <span class="col-10 col-md-4 p-0 my-1">
              <router-link to="/products">
                <HomeButton buttom-text="我要參加"></HomeButton>
              </router-link>
            </span>
          </div>
        </div>
        <div class="col-md-6 p-0 d-none d-md-block">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625140781955.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WHgXTmo8B4Rr3Abc9IweXvoHAKD3XvcbYz2%2FOxfIUAB1upfJT3ZzBg%2BsTMuW8kmrue%2BG08KH9Qg7%2FfqoRPfES9d4zj07wHw%2BB6ftngiA4ay1jkBTsBoFCvNB41JRgEZVR%2FBliSPVmhE6h7Bu%2BijnFf2Rvg5NuEZ5ZjJoKujpItnBYHg2bLNRu%2B7tl1qD%2FK%2F6JAXk4fHYKmih3Aa1vWQikl3pVe1EF3ndqpxeI8NPELiBbVZhpXor3zJbwPcbrLTsIGJTecZo3i1S7MiLCyPVG0wrbIc4ojBgtIxDEnYwoYijqh08Gg39i%2F5Z%2FdcE6zP0p%2B7%2BgetxU4NmfZeQW4caTg%3D%3D"
            alt="介紹圖片_02"
            class="w-100 rounded-1 shadow"
          >
        </div>

        <div class="col-md-6 p-0 d-none d-md-block">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625140781955.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WHgXTmo8B4Rr3Abc9IweXvoHAKD3XvcbYz2%2FOxfIUAB1upfJT3ZzBg%2BsTMuW8kmrue%2BG08KH9Qg7%2FfqoRPfES9d4zj07wHw%2BB6ftngiA4ay1jkBTsBoFCvNB41JRgEZVR%2FBliSPVmhE6h7Bu%2BijnFf2Rvg5NuEZ5ZjJoKujpItnBYHg2bLNRu%2B7tl1qD%2FK%2F6JAXk4fHYKmih3Aa1vWQikl3pVe1EF3ndqpxeI8NPELiBbVZhpXor3zJbwPcbrLTsIGJTecZo3i1S7MiLCyPVG0wrbIc4ojBgtIxDEnYwoYijqh08Gg39i%2F5Z%2FdcE6zP0p%2B7%2BgetxU4NmfZeQW4caTg%3D%3D"
            alt="介紹圖片_02"
            class="w-100 rounded-1 shadow"
          >
        </div>
        <div class="col-md-6">
          <div class="row flex-column align-items-center py-3 text-start">
            <span class="col-10 col-md-9 p-0 pb-1">
              <h3 class="fw-bold mt-1 mb-2">募資專案</h3>
              <p>
                ..
              </p>
              <p>
                ..
              </p>
            </span>

            <span class="col-10 col-md-4 p-0 my-1">
              <router-link to="/products">
                <HomeButton buttom-text="我想捐款"></HomeButton>
              </router-link>
            </span>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row flex-column align-items-center py-3 text-end">
            <span class="col-10 col-md-9 p-0 pb-1">
              <h3 class="fw-bold mt-1 mb-2">產品種類多樣</h3>
              <p>
                Natural 平台現有 310 家合作的有機農家、廠商，所有的合作
                商家皆有獲得政府認證之有機食品標章。
              </p>
              <p>
                依照季節的不同推出不同的當季新鮮蔬果，
                另外 Natural 平台也有販售線下主打的環保用品，因應政府
                減塑政策，為環境盡一份心力。
              </p>
            </span>

            <span class="col-10 col-md-4 p-0 my-1">
              <router-link to="/products">
                <HomeButton buttom-text="前往採購"></HomeButton>
              </router-link>
            </span>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625204826199.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OmHfhon8icfC6aLt8qVeHwKzwAWnxlejs5EO4uL8ylmPMEkZkaz9ilkDd36eNIkva9IddJAwQS1DlDrTAOLRMVzQhSMDUVnSwuteHvbsYrg6QV6t%2FRTwOb4xYEgzzWz4i1AFFUab%2Bt4QPAXrCf5H3XdwaRLOjg2j69adm85QQyQw3lY3XX55pWvn7Nuv%2BgKmhpg7yGqcqXa4lxP3XcR1lmEsAYWwv2%2FmsgenOs0%2BGPihP9vsJlNV6m3hLUUbeQjronMZ0qz5AWx2fpaL1U%2F%2FyMWMAZY4nyI5i9r%2FTv%2B2rZ8mpXl5YI%2BhDdNfJwWsRWbXYGCQ1Xl6mWAaX1Can99cJQ%3D%3D"
            alt="介紹圖片_03"
            class="w-100 rounded-1 shadow"
          >
        </div>
      </div>
    </section>

    <!-- 訂閱 -->
    <section class="py-5 text-center bg-gray-100">
      <p class="fs-4 mb-3 px-2">訂閱 Natural 平台，讓您絕不漏接任何一則最新資訊！</p>
      <div class="row justify-content-center">
        <div class="col-10 col-md-7 col-lg-6 col-xl-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-1 px-2"
              placeholder="請留下您的Email，由我們主動通知您！"
              aria-label="請留下您的Email，由我們主動通知您！">
            <button
              class="btn btn_main py-1 px-4"
              type="button"
            >
            訂閱
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer
    :textColor="'text-secondary'"
    :bgColor="'bg-primary'"
    :moreMsg="true"
  ></Footer>
</template>

<script>
import HomeNavBar from '@/components/navbar/HomeNavBar.vue';
import Footer from '@/components/Footer.vue';
import HerderSwiper from '@/components/swiper/HomeHerderSwiper.vue';
import ProductSwiper from '@/components/swiper/HomeProductSwiper.vue';
import NaturalThreatCard from '@/components/home/HomeNaturalThreatCard.vue';
import CountTo from '@/components/count-to';
import HomeButton from '@/components/home/HomeButton.vue';
import Arrow from '@/components/home/Arrow.vue';

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
      navbarClass: 'py-3',
    };
  },
  components: {
    HomeNavBar,
    Footer,
    HerderSwiper,
    ProductSwiper,
    NaturalThreatCard,
    CountTo,
    HomeButton,
    Arrow,
  },
  methods: {
    changeNavbarStyle() {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');

      if (windowY > main.offsetTop - 120) {
        this.navbarClass = ['bg-primary', 'py-1'];
      } else {
        this.navbarClass = 'py-3';
      }
    },
  },
  mounted() {
    // this.navbarClass = ['bg-dark-rgba-100', 'py-3'];
    window.addEventListener('scroll', this.changeNavbarStyle);
  },
  unmounted() { // 離開頁面後移除監聽事件
    window.removeEventListener('scroll', this.changeNavbarStyle);
  },
};
</script>
